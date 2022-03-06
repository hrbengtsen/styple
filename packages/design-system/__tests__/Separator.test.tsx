import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Separator } from "..";

describe("Test Separator", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Separator />);

    expect(view).toMatchSnapshot();
  });
});
