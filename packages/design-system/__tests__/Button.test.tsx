import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Button } from "..";

describe("Test Button", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Button>Button</Button>);

    expect(view).toMatchSnapshot();
  });
});
