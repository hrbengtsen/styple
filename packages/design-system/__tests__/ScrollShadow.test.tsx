import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { ScrollShadow } from "..";

describe("Test ScrollShadow", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <ScrollShadow>Test ScrollArea</ScrollShadow>
    );

    expect(view).toMatchSnapshot();
  });
});
