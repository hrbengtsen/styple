import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Checkbox } from "..";

describe("Test Checkbox", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Checkbox />);

    expect(view).toMatchSnapshot();
  });
});
