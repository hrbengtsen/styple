import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Switch } from "..";

describe("Test Switch", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Switch />);

    expect(view).toMatchSnapshot();
  });
});
