import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Card } from "..";

describe("Test Card", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Card>Card contents</Card>);

    expect(view).toMatchSnapshot();
  });
});
