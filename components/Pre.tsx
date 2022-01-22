import { styled } from "../packages/design-system/stitches.config";

export const Pre = styled("pre", {
  $$background: "$colors$bg300",
  $$text: "$colors$text200",
  $$syntax1: "$colors$accent300",
  $$syntax2: "$colors$success300",
  $$syntax3: "$colors$accent300",
  $$syntax4: "$colors$accent300",
  $$comment: "$colors$text300",
  $$removed: "$colors$danger300",
  $$added: "$colors$success300",
  $$fadedLines: "$colors$text300",
  $$highlightedWordBg: "$colors$accent100A",
  $$highlightedWordText: "$colors$accent300",
  $$highlightedWordBgActive: "$colors$accent200A",
  $$highlightedWordTextActive: "$colors$accent300",

  p: "$lg",
  overflow: "auto",
  fontFamily: "$mono",
  fontSize: "$xs",
  lineHeight: "$normal",
  whiteSpace: "pre",
  backgroundColor: "$$background",
  color: "$$text",
  borderRadius: "$xl",

  "& > code": { display: "block" },
  "& > code > div, & > code > div > span": { maxHeight: "21px" }, // fixes some lines having double height

  ".token.parameter": {
    color: "$$text",
  },

  ".token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function": {
    color: "$$syntax1",
  },

  ".token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color": {
    color: "$$syntax2",
  },

  ".token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important": {
    color: "$$syntax3",
  },

  ".token.punctuation, .token.module, .token.property": {
    color: "$$syntax4",
  },

  ".token.comment": {
    color: "$$comment",
  },

  ".token.atapply .token:not(.rule):not(.important)": {
    color: "inherit",
  },

  ".language-shell .token:not(.comment)": {
    color: "inherit",
  },

  ".language-css .token.function": {
    color: "inherit",
  },

  ".token.deleted:not(.prefix), .token.inserted:not(.prefix)": {
    display: "block",
    px: "$lg",
    mx: "-$lg",
  },

  ".token.deleted:not(.prefix)": {
    color: "$$removed",
  },

  ".token.inserted:not(.prefix)": {
    color: "$$added",
  },

  ".token.deleted.prefix, .token.inserted.prefix": {
    userSelect: "none",
  },

  // Styles for highlighted word
  ".highlight-word": {
    $$bgAndShadow: "$$highlightedWordBg",
    $$xOffset: "0px",
    color: "$$highlightedWordText",
    backgroundColor: "$$bgAndShadow",
    display: "inline-block",
    boxShadow: "$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow",
    borderRadius: "$xs",

    // reset the color for tokens inside highlighted words
    ".token": {
      color: "inherit",
    },

    "&.on": {
      $$bgAndShadow: "$$highlightedWordBgActive",
      color: "$$hightlightedWordTextActive",
      transition: "all 0.2s ease",
      cursor: "pointer",
    },
  },

  ".token.deleted .highlight-word": {
    $$bgAndShadow: "$$highlightedWordBg",
    color: "$$highlightedWordText",

    "&.on": {
      $$bgAndShadow: "$$highlightedWordBgActive",
      color: "$$hightlightedWordTextActive",
    },
  },

  ".token.inserted .highlight-word": {
    $$bgAndShadow: "$$highlightedWordBg",
    color: "$$highlightedWordText",

    "&.on": {
      $$bgAndShadow: "$$highlightedWordBgActive",
      color: "$$hightlightedWordTextActive",
    },
  },

  "&[data-highlights-lines] .highlight-line": {
    "&[data-highlighted=false]": {
      "&, *": {
        color: "$$fadedLines",
      },
      opacity: ".7",
    },
  },

  variants: {
    outline: {
      true: {
        $$background: "$colors$bg200",
        boxShadow: "inset 0 0 0 1px $colors$button100",
      },
    },
  },
});
