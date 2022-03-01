import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { NavItem } from "..";

describe("Test NavItem", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<NavItem>Test Link</NavItem>);

    expect(view).toMatchSnapshot();
  });
});
