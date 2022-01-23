// Credit: https://ped.ro/writing/code-blocks-but-better
import rangeParser from "parse-numeric-range";
import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import { refractor } from "refractor/lib/all.js";
import highlightLine from "./rehypeHighlightLine";
import highlightWord from "./rehypeHighlightWord";

export default function highlightCode(options = {}) {
  return (tree) => {
    visit(tree, "element", visitor);
  };

  function visitor(node, index, parentNode) {
    if (
      parentNode.tagName === "pre" &&
      node.tagName === "code" &&
      node.properties.className
    ) {
      // syntax highlight
      const [_, lang] = node.properties.className[0].split("-");

      let result = refractor.highlight(toString(node), lang);

      // line highlight
      const linesToHighlight = rangeParser(node.properties.line || "0");
      result = highlightLine(result, linesToHighlight);

      // word highlight
      result = highlightWord(result);

      node.children = result;
    }
  }
}
