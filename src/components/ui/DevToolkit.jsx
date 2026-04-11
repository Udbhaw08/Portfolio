/**
 * DevToolkit — universal draggable dev panel
 * Only renders in development (import.meta.env.DEV).
 *
 * ─── USAGE ───────────────────────────────────────────────────────────────────
 *
 * 1. Define your sliders:
 *
 *   const SLIDERS = [
 *     { key: "width",   label: "WIDTH %",    min: 20,  max: 100, step: 1,   default: 52  },
 *     { key: "objectX", label: "FOCUS X %",  min: 0,   max: 100, step: 1,   default: 53  },
 *     { key: "objectY", label: "FOCUS Y %",  min: 0,   max: 100, step: 1,   default: 0   },
 *     { key: "scale",   label: "SCALE %",    min: 80,  max: 150, step: 0.5, default: 112 },
 *   ];
 *
 * 2. Define how the output string is built from the values:
 *
 *   const toOutput = (v) =>
 *     `w-[${v.width}%] object-[${v.objectX}%_${v.objectY}%] scale-[${(v.scale/100).toFixed(2)}]`;
 *
 * 3. Drop it into your component:
 *
 *   const [vals, setVals] = useState(null);   // null = use slider defaults
 *
 *   <DevToolkit
 *     title="HERO IMAGE"
 *     sliders={SLIDERS}
 *     toOutput={toOutput}
 *     onChange={setVals}
 *   />
 *
 *   Then use vals in your element styles (vals is null until first change):
 *
 *   style={{
 *     width:           `${vals?.width   ?? 52}%`,
 *     objectPosition:  `${vals?.objectX ?? 53}% ${vals?.objectY ?? 0}%`,
 *     transform:       `scale(${(vals?.scale ?? 112) / 100})`,
 *   }}
 *
 * ─── PROPS ───────────────────────────────────────────────────────────────────
 *
 *   title      string                  Panel header label
 *   sliders    SliderDef[]             Slider definitions (see above)
 *   toOutput   (values) => string      Builds the copyable output string
 *   onChange   (values) => void        Called on every slider change
 *   initialPos { x, y }               Starting panel position (default: top-left)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useRef, useEffect, useCallback } from "react";

const MONO = "'IBM Plex Mono', monospace";

const S = {
  panel: (dragging) => ({
    position: "fixed",
    zIndex: 9999,
    width: 272,
    background: "rgba(8,8,8,0.97)",
    border: "1px solid #222",
    boxShadow: "0 12px 40px rgba(0,0,0,0.8)",
    fontFamily: MONO,
    userSelect: "none",
    cursor: dragging ? "grabbing" : "grab",
    backdropFilter: "blur(8px)",
  }),
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "9px 12px",
    borderBottom: "1px solid #1a1a1a",
    background: "#0e0e0e",
  },
  title: {
    fontSize: 8,
    letterSpacing: "0.2em",
    color: "#444",
    textTransform: "uppercase",
  },
  collapseBtn: {
    background: "none",
    border: "none",
    color: "#444",
    fontSize: 12,
    cursor: "pointer",
    padding: "0 2px",
    lineHeight: 1,
  },
  body: { padding: "12px 12px 10px" },
  sliderRow: { marginBottom: 11 },
  sliderMeta: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  sliderLabel: {
    fontSize: 7,
    letterSpacing: "0.18em",
    color: "#3a3a3a",
    textTransform: "uppercase",
  },
  sliderValue: { fontSize: 9, color: "#666", minWidth: 36, textAlign: "right" },
  input: { width: "100%", accentColor: "#e0e0e0", cursor: "pointer" },
  output: {
    marginTop: 13,
    padding: "9px 10px",
    background: "#060606",
    border: "1px solid #181818",
    fontSize: 8,
    color: "#555",
    letterSpacing: "0.1em",
    lineHeight: 1.8,
    wordBreak: "break-all",
  },
  outputLabel: {
    fontSize: 7,
    letterSpacing: "0.22em",
    color: "#252525",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  outputValue: { color: "#777" },
  btnRow: { display: "flex", gap: 6, marginTop: 10 },
  copyBtn: (copied) => ({
    flex: 1,
    background: copied ? "#141414" : "#efefef",
    color: copied ? "#444" : "#080808",
    border: "none",
    padding: "8px 0",
    fontSize: 7,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: MONO,
    transition: "background 0.15s, color 0.15s",
  }),
  resetBtn: {
    background: "none",
    color: "#2a2a2a",
    border: "1px solid #1a1a1a",
    padding: "8px 10px",
    fontSize: 7,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: MONO,
  },
};

function buildDefaults(sliders) {
  return Object.fromEntries(sliders.map((s) => [s.key, s.default]));
}

export function DevToolkit({
  title = "DEV TOOLKIT",
  sliders = [],
  toOutput = () => "",
  onChange,
  initialPos = { x: 16, y: 72 },
}) {
  if (!import.meta.env.DEV) return null;

  const defaults = buildDefaults(sliders);
  const [values, setValues]       = useState(defaults);
  const [panelPos, setPanelPos]   = useState(initialPos);
  const [dragging, setDragging]   = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied]       = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const update = (key, val) => {
    const next = { ...values, [key]: Number(val) };
    setValues(next);
    onChange?.(next);
  };

  const reset = () => {
    setValues(defaults);
    onChange?.(defaults);
  };

  const copyOutput = () => {
    const text = toOutput(values);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // ── drag logic ───────────────────────────────────────────────────────
  const onMouseDown = useCallback((e) => {
    if (e.target.closest("[data-no-drag]")) return;
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - panelPos.x,
      y: e.clientY - panelPos.y,
    };
    e.preventDefault();
  }, [panelPos]);

  useEffect(() => {
    if (!dragging) return;
    const move = (e) => setPanelPos({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [dragging]);

  const outputStr = toOutput(values);

  return (
    <div
      onMouseDown={onMouseDown}
      style={{ ...S.panel(dragging), left: panelPos.x, top: panelPos.y }}
    >
      {/* header */}
      <div style={S.header}>
        <span style={S.title}>⚙ {title}</span>
        <button
          data-no-drag="true"
          onClick={() => setCollapsed((c) => !c)}
          style={S.collapseBtn}
        >
          {collapsed ? "▾" : "▴"}
        </button>
      </div>

      {/* body */}
      {!collapsed && (
        <div style={S.body}>
          {/* sliders */}
          {sliders.map(({ key, label, min, max, step }) => (
            <div key={key} style={S.sliderRow}>
              <div style={S.sliderMeta}>
                <span style={S.sliderLabel}>{label}</span>
                <span style={S.sliderValue}>{values[key]}</span>
              </div>
              <input
                data-no-drag="true"
                type="range"
                min={min}
                max={max}
                step={step}
                value={values[key]}
                onChange={(e) => update(key, e.target.value)}
                style={S.input}
              />
            </div>
          ))}

          {/* output preview */}
          <div style={S.output}>
            <div style={S.outputLabel}>output</div>
            <span style={S.outputValue}>{outputStr || "—"}</span>
          </div>

          {/* buttons */}
          <div data-no-drag="true" style={S.btnRow}>
            <button onClick={copyOutput} style={S.copyBtn(copied)}>
              {copied ? "COPIED ✓" : "COPY OUTPUT"}
            </button>
            <button onClick={reset} style={S.resetBtn}>
              RESET
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
