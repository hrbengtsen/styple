import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Code } from "..";

describe("Test Code", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Code>code</Code>);

    expect(view).toMatchSnapshot();
  });
});
