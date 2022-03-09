import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Status } from "..";

describe("Test Status", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Status />);

    expect(view).toMatchSnapshot();
  });
});
