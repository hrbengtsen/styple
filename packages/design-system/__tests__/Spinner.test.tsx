import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Spinner } from "..";

describe("Test Spinner", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(<Spinner />);

    expect(view).toMatchSnapshot();
  });

  /*it("should delay displaying", async () => {
    jest.useFakeTimers();
    render(<Spinner delay={2000} data-testid="spinner" />);

    expect(spinner).toHaveStyle("visibility: hidden");
  });*/
});
