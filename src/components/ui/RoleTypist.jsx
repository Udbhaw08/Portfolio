import { useState, useEffect, useRef } from "react";

const ROLES = [
  "AI Systems Engineer",
  "Full-Stack Developer",
  "Real-Time Platform Builder",
  "Systems Thinker",
  "Logistics Intelligence Dev",
];

export function RoleTypist({ font, size = 13, color = "#666", letterSpacing = "0.12em" }) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx]   = useState(0);
  const [phase, setPhase]       = useState("typing"); // typing | pausing | erasing
  const frame = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIdx];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        frame.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 52);
      } else {
        frame.current = setTimeout(() => setPhase("pausing"), 1800);
      }
    }

    if (phase === "pausing") {
      frame.current = setTimeout(() => setPhase("erasing"), 400);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        frame.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 28);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(frame.current);
  }, [displayed, phase, roleIdx]);

  return (
    <span
      className="font-mono font-normal uppercase inline-flex items-center"
      style={{
        fontSize: size,
        letterSpacing,
        color,
      }}
    >
      {displayed}
      <span className="cursor-blink" style={{ backgroundColor: color }} />
    </span>
  );
}

