/**
 * Hero image toolkit config — saved values
 * right-0 w-[70%] object-[53%_0%] scale-[1.12]
 *
 * To re-enable the toolkit, add back to Hero.jsx:
 *
 *   import { DevToolkit } from "../components/ui/DevToolkit";
 *   import { HERO_IMG_SLIDERS, heroImgOutput } from "../dev/heroImageToolkit";
 *
 *   const [imgStyle, setImgStyle] = useState(HERO_IMG_DEFAULTS);
 *
 *   <DevToolkit
 *     title="HERO IMAGE"
 *     sliders={HERO_IMG_SLIDERS}
 *     toOutput={heroImgOutput}
 *     onChange={setImgStyle}
 *   />
 */

export const HERO_IMG_DEFAULTS = {
  width:   70,
  right:   0,
  objectX: 53,
  objectY: 0,
  scale:   112,
};

export const HERO_IMG_SLIDERS = [
  { key: "width",   label: "IMG WIDTH %",    min: 20,  max: 100, step: 1,   default: 70  },
  { key: "right",   label: "RIGHT OFFSET %", min: -20, max: 20,  step: 0.5, default: 0   },
  { key: "objectX", label: "FOCUS X %",      min: 0,   max: 100, step: 1,   default: 53  },
  { key: "objectY", label: "FOCUS Y %",      min: 0,   max: 100, step: 1,   default: 0   },
  { key: "scale",   label: "SCALE %",        min: 80,  max: 150, step: 0.5, default: 112 },
];

export const heroImgOutput = (v) =>
  `right-0 w-[${v.width}%] object-[${v.objectX}%_${v.objectY}%] scale-[${(v.scale / 100).toFixed(2)}]`;
