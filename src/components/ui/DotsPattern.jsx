import { COLORS } from "../../constants/theme";

export const DotsPattern = ({ w = 84, h = 84, cols = 5, rows = 5 }) => {
  const dots = [];
  const gapX = (w - 4) / (cols - 1);
  const gapY = (h - 4) / (rows - 1);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={2 + c * gapX} cy={2 + r * gapY} r={2} fill={COLORS.gray} />);
    }
  }
  return <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>{dots}</svg>;
};
