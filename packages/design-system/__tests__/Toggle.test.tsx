import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Toggle } from "..";

describe("Test Toggle", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Toggle>I</Toggle>);

    expect(view).toMatchSnapshot();
  });
});
