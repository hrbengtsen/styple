import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Link } from "..";

describe("Test Link", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Link>Test Link</Link>);

    expect(view).toMatchSnapshot();
  });
});
