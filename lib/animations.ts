import { keyframes, css } from "../packages/design-system";

// Landing page icon micro-interactions
export const personAnim = keyframes({
  "0%": { transform: "translateY(0)" },
  "10%": { transform: "translateY(2px)" },
  "50%": { transform: "translateY(-8px)" },
  "100%": { transform: "translateY(0)" },
});
export const brushAnim = keyframes({
  "0%": { transform: "rotate(0)" },
  "20%": { transform: "rotate(-25deg)" },
  "70%": { transform: "rotate(15deg)" },
  "100%": { transform: "rotate(0)" },
});
export const codeAnim = keyframes({
  "0%": { transform: "scale(1)" },
  "25%": { transform: "scale(1.2)" },
  "75%": { transform: "scale(0.9)" },
  "100%": { transform: "scale(1)" },
});

// Enter (staggering) animation: override $$stagger with >0 on styled component to stagger
const enterAnim = keyframes({
  "0%": { transform: "translateY(10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});
export const enterAndStagger = css({
  $$stagger: 0,
  $$delay: "120ms",
  opacity: 0,
  willChange: "opacity, transform",
  animation: `${enterAnim} .5s forwards`,
  animationDelay: "calc($$stagger * $$delay)",
  "@motion": {
    animation: "none",
  },
});

// Navbar animations
export const slideRight = keyframes({
  from: { transform: "translateX(-32px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1, visibility: "visible" },
});
export const openNav = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
});
export const closeNav = keyframes({
  from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});
export const openFullNav = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
