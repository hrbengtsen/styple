import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Label } from "..";

describe("Test Label", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Label>Test Label</Label>);

    expect(view).toMatchSnapshot();
  });
});
