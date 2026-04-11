import { COLORS } from "../constants/theme";

export const styles = {
  // ── Section ──────────────────────────────────────────────────────────
  section: {
    paddingTop: 100,
    paddingBottom: 80,
  },

  // ── Section title ────────────────────────────────────────────────────
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginBottom: 48,
  },
  sectionH2: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: COLORS.gray,
    whiteSpace: "nowrap",
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },

  // ── Projects ─────────────────────────────────────────────────────────
  viewAll: {
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.06em",
    color: COLORS.gray,
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.2s ease",
    whiteSpace: "nowrap",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 1,
    backgroundColor: COLORS.border,
    border: `1px solid ${COLORS.border}`,
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor: COLORS.bg,
    transition: "background-color 0.25s ease",
  },
  projectImg: {
    height: 220,
    overflow: "hidden",
    backgroundColor: "#111",
    position: "relative",
  },
  projectTags: {
    display: "flex",
    gap: 8,
    padding: "10px 16px 0",
    flexWrap: "wrap",
  },
  projectTag: {
    fontSize: 11,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: COLORS.gray,
  },
  projectBody: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    flex: 1,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 600,
    color: COLORS.white,
    letterSpacing: "-0.01em",
  },
  projectDesc: {
    fontSize: 14,
    color: COLORS.gray,
    lineHeight: 1.6,
  },

  // ── Buttons ──────────────────────────────────────────────────────────
  btnPrimary: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#0a0a0a",
    backgroundColor: "#f0f0f0",
    border: "none",
    padding: "12px 24px",
    cursor: "pointer",
    transition: "background-color 0.2s ease, color 0.2s ease",
  },
  btnSecondary: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: COLORS.gray,
    backgroundColor: "transparent",
    border: `1px solid ${COLORS.border}`,
    padding: "11px 20px",
    cursor: "pointer",
    transition: "border-color 0.2s ease, color 0.2s ease",
  },

  // ── Skills ───────────────────────────────────────────────────────────
  skillsWrap: {
    display: "flex",
    gap: 60,
  },
  skillsLeft: {
    position: "relative",
    width: 280,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skillsRight: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    alignContent: "flex-start",
    flex: 1,
    backgroundColor: COLORS.border,
    border: `1px solid ${COLORS.border}`,
  },
  skillBlock: {
    backgroundColor: COLORS.bg,
    display: "flex",
    flexDirection: "column",
    minWidth: 160,
    flex: "1 1 160px",
  },
  skillTitle: {
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: COLORS.gray,
    padding: "10px 14px",
  },
  skillDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    width: "100%",
  },
  skillItems: {
    padding: "10px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  skillRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  skillItem: {
    fontSize: 14,
    color: COLORS.grayLight,
  },

  // ── About ────────────────────────────────────────────────────────────
  aboutWrap: {
    display: "flex",
    justifyContent: "space-between",
    gap: 80,
    alignItems: "flex-start",
  },
  aboutText: {
    flex: 1,
    maxWidth: 520,
  },
  aboutP: {
    fontSize: 16,
    color: COLORS.gray,
    lineHeight: 1.75,
  },
  aboutImgWrap: {
    position: "relative",
    width: 320,
    height: 420,
    flexShrink: 0,
  },
  aboutImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "grayscale(20%)",
  },

  // ── Contacts ─────────────────────────────────────────────────────────
  contactWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 80,
  },
  contactText: {
    fontSize: 15,
    color: COLORS.gray,
    lineHeight: 1.7,
    maxWidth: 480,
    fontWeight: 400,
  },
  contactBox: {
    border: `1px solid ${COLORS.border}`,
    padding: 24,
    minWidth: 240,
  },
  contactBoxTitle: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: COLORS.gray,
    marginBottom: 16,
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  contactValue: {
    fontSize: 14,
    color: COLORS.grayLight,
  },

  // ── Footer ───────────────────────────────────────────────────────────
  footer: {
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: 60,
    borderTop: `1px solid ${COLORS.border}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLeft: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  footerBrand: {
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: COLORS.white,
  },
  footerEmail: {
    fontSize: 13,
    color: COLORS.gray,
  },
  footerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 8,
  },
  footerMediaTitle: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: COLORS.gray,
  },
  footerCopy: {
    fontSize: 12,
    color: "#444",
    letterSpacing: "0.02em",
  },
};
