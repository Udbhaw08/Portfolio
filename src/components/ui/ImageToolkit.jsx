import { useState, useRef, useEffect, useCallback } from "react";

const MONO = "'IBM Plex Mono', monospace";

const DEFAULT = {
  right: 0,
  width: 52,
  objectX: 50,
  objectY: 0,
  scale: 100,
};

export function ImageToolkit({ onChange }) {
  const [values, setValues] = useState(DEFAULT);
  const [panelPos, setPanelPos] = useState({ x: 16, y: 80 });
  const [dragging, setDragging] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const panelRef = useRef(null);

  const update = (key, val) => {
    const next = { ...values, [key]: Number(val) };
    setValues(next);
    onChange?.(next);
  };

  const reset = () => {
    setValues(DEFAULT);
    onChange?.(DEFAULT);
  };

  const copyCode = () => {
    const code = `right-0 w-[${values.width}%] object-[${values.objectX}%_${values.objectY}%] scale-[${values.scale / 100}]`;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  // ── panel drag ──────────────────────────────────────────────────────
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
    const onMove = (e) => {
      setPanelPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  const controls = [
    { key: "width",   label: "IMG WIDTH %",   min: 20,  max: 100, step: 1  },
    { key: "right",   label: "RIGHT OFFSET %", min: -20, max: 20,  step: 0.5 },
    { key: "objectX", label: "FOCUS X %",      min: 0,   max: 100, step: 1  },
    { key: "objectY", label: "FOCUS Y %",      min: 0,   max: 100, step: 1  },
    { key: "scale",   label: "SCALE %",        min: 80,  max: 140, step: 1  },
  ];

  return (
    <div
      ref={panelRef}
      onMouseDown={onMouseDown}
      style={{
        position: "fixed",
        left: panelPos.x,
        top: panelPos.y,
        zIndex: 9999,
        width: 260,
        background: "rgba(10,10,10,0.96)",
        border: "1px solid #2a2a2a",
        boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
        fontFamily: MONO,
        userSelect: "none",
        cursor: dragging ? "grabbing" : "grab",
      }}
    >
      {/* ── header ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 12px",
          borderBottom: "1px solid #1c1c1c",
          background: "#111",
        }}
      >
        <span style={{ fontSize: 9, letterSpacing: "0.18em", color: "#555", textTransform: "uppercase" }}>
          ⚙ IMAGE TOOLKIT
        </span>
        <button
          data-no-drag="true"
          onClick={() => setCollapsed(c => !c)}
          style={{
            background: "none", border: "none", color: "#555",
            fontSize: 11, cursor: "pointer", padding: "0 4px", lineHeight: 1,
          }}
        >
          {collapsed ? "▾" : "▴"}
        </button>
      </div>

      {/* ── controls ── */}
      {!collapsed && (
        <div style={{ padding: "12px 12px 10px" }}>
          {controls.map(({ key, label, min, max, step }) => (
            <div key={key} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ fontSize: 8, letterSpacing: "0.16em", color: "#444", textTransform: "uppercase" }}>
                  {label}
                </span>
                <span style={{ fontSize: 9, color: "#888", minWidth: 32, textAlign: "right" }}>
                  {values[key]}
                </span>
              </div>
              <input
                data-no-drag="true"
                type="range"
                min={min}
                max={max}
                step={step}
                value={values[key]}
                onChange={e => update(key, e.target.value)}
                style={{
                  width: "100%",
                  accentColor: "#f0f0f0",
                  cursor: "pointer",
                  height: 2,
                }}
              />
            </div>
          ))}

          {/* ── output preview ── */}
          <div
            style={{
              marginTop: 12,
              padding: "8px 10px",
              background: "#0d0d0d",
              border: "1px solid #1c1c1c",
              fontSize: 8,
              color: "#3a3a3a",
              letterSpacing: "0.1em",
              lineHeight: 1.7,
              wordBreak: "break-all",
            }}
          >
            <div style={{ color: "#2a2a2a", marginBottom: 4, fontSize: 7, letterSpacing: "0.2em" }}>GENERATED VALUES</div>
            <div style={{ color: "#555" }}>width: <span style={{ color: "#888" }}>{values.width}%</span></div>
            <div style={{ color: "#555" }}>right: <span style={{ color: "#888" }}>{values.right}%</span></div>
            <div style={{ color: "#555" }}>object-position: <span style={{ color: "#888" }}>{values.objectX}% {values.objectY}%</span></div>
            <div style={{ color: "#555" }}>scale: <span style={{ color: "#888" }}>{values.scale / 100}</span></div>
          </div>

          {/* ── buttons ── */}
          <div style={{ display: "flex", gap: 6, marginTop: 10 }} data-no-drag="true">
            <button
              onClick={copyCode}
              style={{
                flex: 1,
                background: copied ? "#1a1a1a" : "#f0f0f0",
                color: copied ? "#555" : "#0a0a0a",
                border: "none",
                padding: "7px 0",
                fontSize: 8,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: MONO,
                transition: "all 0.2s",
              }}
            >
              {copied ? "COPIED ✓" : "COPY VALUES"}
            </button>
            <button
              onClick={reset}
              style={{
                background: "none",
                color: "#333",
                border: "1px solid #1c1c1c",
                padding: "7px 10px",
                fontSize: 8,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: MONO,
              }}
            >
              RESET
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
