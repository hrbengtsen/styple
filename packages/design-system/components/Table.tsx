import React from "react";
import { styled } from "../stitches.config";
import { ScrollShadow } from "./ScrollShadow";

export const Tbody = styled("tbody", {
  width: "100%",
});

export const Tfoot = styled("tfoot", {});

export const Tr = styled("tr", {});

export const Th = styled("th", {
  fontWeight: "unset",
  textAlign: "start",
  fontSize: "$sm",
  color: "$text300",
  p: "$sm",

  borderBottom: `1px solid $button100A`,

  variants: {
    align: {
      start: {
        textAlign: "start",
      },
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
    },
  },
  defaultVariants: {
    align: "start",
  },
});

export const Td = styled("td", {
  p: "$sm",

  borderBottom: "1px solid $button100A",

  fontSize: "$sm",
  color: "$text300",
  variants: {
    align: {
      start: {
        textAlign: "start",
      },
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
    },
  },
  defaultVariants: {
    align: "start",
  },
});

export const Thead = styled("thead", {
  [`& ${Th}`]: {
    fontSize: "$xs",
    color: "$text200",
    fontWeight: "$semibold",
  },
  [`& ${Td}`]: {
    fontSize: "$xs",
    color: "$text200",
    fontWeight: "$semibold",
  },
});

const StyledTable = styled("table", {
  "@bp1": {
    width: "100%",
  },
  tableLayout: "fixed",
  borderSpacing: 0,
});

type TableProps = React.ComponentProps<typeof StyledTable>;

export const Table = React.forwardRef<
  React.ElementRef<typeof StyledTable>,
  TableProps
>(({ children, ...props }, forwardedRef) => (
  <ScrollShadow direction="horizontal">
    <StyledTable {...props} ref={forwardedRef}>
      {children}
    </StyledTable>
  </ScrollShadow>
));
Table.displayName = "Table";
