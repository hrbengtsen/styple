import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Skeleton } from "..";

describe("Test Skeleton", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Skeleton />);

    expect(view).toMatchSnapshot();
  });
});
