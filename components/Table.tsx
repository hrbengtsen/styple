import { cozyTheme, styled } from "../stitches.config";

export const Table = styled("table", {
  width: "100%",
  tableLayout: "fixed",
  borderSpacing: 0,
});

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
  py: "$sm",

  borderBottom: `1px solid $button200`,
  [`.${cozyTheme} &`]: {
    borderBottom: `1px solid $bg300`,
  },

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
  py: "$sm",

  borderBottom: "1px solid $button200",
  [`.${cozyTheme} &`]: {
    borderBottom: `1px solid $bg300`,
  },

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
