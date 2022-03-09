import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { TextField } from "..";

describe("Test TextField", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<TextField />);

    expect(view).toMatchSnapshot();
  });
});
