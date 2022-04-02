import React from "react";
import { styled, keyframes } from "../stitches.config";
import { VariantProps } from "@stitches/react";

const opacityAnim = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

const OuterWrapper = styled("div", {
  display: "inline-block",

  variants: {
    size: {
      sm: {
        size: "24px",
      },
      lg: {
        size: "32px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const InnerWrapper = styled("div", {
  position: "relative",
  top: "50%",
  left: "50%",
  size: "inherit",

  "& div": {
    position: "absolute",
    animation: `${opacityAnim} 1.2s linear infinite`,
    borderRadius: "$md",
    width: "24%",
    height: "8%",
    top: "-3.9%",
    left: "-10%",
  },
  "& div:nth-child(1)": {
    transform: "rotate(0deg) translate(146%)",
    animationDelay: "-1.1s",
  },
  "& div:nth-child(2)": {
    transform: "rotate(30deg) translate(146%)",
    animationDelay: "-1s",
  },
  "& div:nth-child(3)": {
    transform: "rotate(60deg) translate(146%)",
    animationDelay: "-.9s",
  },
  "& div:nth-child(4)": {
    transform: "rotate(90deg) translate(146%)",
    animationDelay: "-.8s",
  },
  "& div:nth-child(5)": {
    transform: "rotate(120deg) translate(146%)",
    animationDelay: "-.7s",
  },
  "& div:nth-child(6)": {
    transform: "rotate(150deg) translate(146%)",
    animationDelay: "-.6s",
  },
  "& div:nth-child(7)": {
    transform: "rotate(180deg) translate(146%)",
    animationDelay: "-.5s",
  },
  "& div:nth-child(8)": {
    transform: "rotate(210deg) translate(146%)",
    animationDelay: "-.4s",
  },
  "& div:nth-child(9)": {
    transform: "rotate(240deg) translate(146%)",
    animationDelay: "-.3s",
  },
  "& div:nth-child(10)": {
    transform: "rotate(270deg) translate(146%)",
    animationDelay: "-.2s",
  },
  "& div:nth-child(11)": {
    transform: "rotate(300deg) translate(146%)",
    animationDelay: "-.1s",
  },
  "& div:nth-child(12)": {
    transform: "rotate(330deg) translate(146%)",
    animationDelay: "0s",
  },

  variants: {
    color: {
      primary: {
        "& div": {
          bg: "$primary200",
        },
      },
      accent: {
        "& div": {
          bg: "$accent200",
        },
      },
      danger: {
        "& div": {
          bg: "$danger200",
        },
      },
      success: {
        "& div": {
          bg: "$success200",
        },
      },
      text: {
        "& div": {
          bg: "$text200",
        },
      },
      white: {
        "& div": {
          bg: "#FFFFFF",
        },
      },
      black: {
        "& div": {
          bg: "#000000",
        },
      },
    },
  },
  defaultVariants: {
    color: "text",
  },
});

type SpinnerProps = React.ComponentProps<typeof OuterWrapper> &
  VariantProps<typeof InnerWrapper> & {
    delay?: number;
  };

export const Spinner = ({ delay = 600, color, ...props }: SpinnerProps) => {
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, delay);
  }, [delay]);

  return (
    <OuterWrapper
      {...props}
      css={{
        visibility: `${hidden ? "hidden" : "visible"}`,
      }}
    >
      <InnerWrapper color={color}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </InnerWrapper>
    </OuterWrapper>
  );
};
