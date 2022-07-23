import React from "react";
import { styled, keyframes } from "../stitches.config";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { Button } from "./Button";
import { Container } from "./Containers";
import { AlertCircle, X, CheckCircle2 } from "lucide-react";

const VIEWPORT_PADDING = 24;

const hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  p: VIEWPORT_PADDING,
  gap: "$lg",
  width: 390,
  maxWidth: "100vw",
  m: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none",
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: "title",
  mb: "$xs",
  fontWeight: "$bold",
  color: "$text100",
  fontSize: "$sm",
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: "description",
  color: "$text200",
  fontSize: "$xs",
  lineHeight: 1.3,
});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: "action",
});

const StyledToast = styled(ToastPrimitive.Root, {
  bg: "$bg200E",
  borderRadius: "$xl",
  boxShadow: "$sm",
  padding: "$md",
  display: "grid",
  gridTemplateAreas: '"description action" "description action"',
  gridTemplateColumns: "auto max-content",
  columnGap: "$md",
  alignItems: "center",

  "@media (prefers-reduced-motion: no-preference)": {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))",
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out",
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },

  variants: {
    hasTitle: {
      true: {
        gridTemplateAreas: '"title action" "description action"',
      },
    },
    hasStatus: {
      true: {
        gridTemplateAreas:
          '"status description action" "status description action"',
        gridTemplateColumns: "max-content auto max-content",
      },
    },
  },
  compoundVariants: [
    {
      hasTitle: true,
      hasStatus: true,
      css: {
        gridTemplateAreas: '"status title action" "status description action"',
        gridTemplateColumns: "max-content auto max-content",
      },
    },
  ],
});

// Type to make children and actionAlt be required together (if there is an Action there should also be an actionAlt)
type ActionProps =
  | {
      children?: undefined;
      actionAlt?: string;
    }
  | {
      children: React.ReactElement;
      actionAlt: string;
    };

type ToastProps = React.ComponentProps<typeof StyledToast> & {
  title?: string;
  content: string;
  status?: "success" | "error";
} & ActionProps;

export const Toast = ({
  title,
  content,
  status,
  children,
  actionAlt,
  ...props
}: ToastProps) => (
  <StyledToast
    hasTitle={title ? true : false}
    hasStatus={status ? true : false}
    {...props}
  >
    {status === "success" && (
      <Container
        css={{
          gridArea: "status",
          color: "$success200",
        }}
      >
        <CheckCircle2 style={{ verticalAlign: "middle" }} />
      </Container>
    )}
    {status === "error" && (
      <Container
        css={{
          gridArea: "status",
          color: "$danger200",
        }}
      >
        <AlertCircle style={{ verticalAlign: "middle" }} />
      </Container>
    )}

    {title && <StyledTitle>{title}</StyledTitle>}
    <StyledDescription
      css={{
        fontWeight: `${title ? "$reg" : "$semibold"}`,
      }}
    >
      {content}
    </StyledDescription>

    {children && (
      <StyledAction altText={actionAlt} asChild>
        {children}
      </StyledAction>
    )}
    {!children && (
      <ToastPrimitive.Close asChild>
        <Button
          highlight
          size="circle"
          // Use same grid-area as action would + smaller circle size for lower Toast form factor
          css={{ gridArea: "action", size: "32px", p: 0, lineHeight: 0 }}
          aria-label="Close button"
        >
          <X size={20} style={{ verticalAlign: "middle" }} />
        </Button>
      </ToastPrimitive.Close>
    )}
  </StyledToast>
);

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
