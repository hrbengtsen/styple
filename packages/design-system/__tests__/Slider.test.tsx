import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Slider } from "..";

describe("Test Slider", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Slider />);

    expect(view).toMatchSnapshot();
  });
});
