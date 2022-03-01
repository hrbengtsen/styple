import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { ScrollArea } from "..";

describe("Test ScrollArea", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<ScrollArea>Test ScrollArea</ScrollArea>);

    expect(view).toMatchSnapshot();
  });
});
