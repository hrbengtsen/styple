import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Badge } from "..";

describe("Test Badge", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Badge />);

    expect(view).toMatchSnapshot();
  });
});
