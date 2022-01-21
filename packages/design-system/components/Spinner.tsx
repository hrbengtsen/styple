import React from "react";
import { styled, keyframes } from "../stitches.config";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const Rotating = styled("div", {
  display: "inline-block",
  height: "24px",
  width: "24px",
  animation: `${spin} 1.1s ease-in-out infinite`,

  variants: {
    color: {
      primary: {
        color: "$primary200",
      },
      accent: {
        color: "$accent200",
      },
      danger: {
        color: "$danger200",
      },
      success: {
        color: "$success200",
      },
      text: {
        color: "$text200",
      },
      white: {
        color: "#FFFFFF",
      },
      black: {
        color: "#000000",
      },
    },
  },
  defaultVariants: {
    color: "text",
  },
});

export const Spinner = (props: React.ComponentProps<typeof Rotating>) => {
  return (
    <Rotating {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22,12c0,5.5-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2" />
      </svg>
    </Rotating>
  );
};
