import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Toast, ToastProvider, ToastViewport } from "..";

describe("Test Toast", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <ToastProvider>
        <Toast content="This is a Toast" />

        <ToastViewport />
      </ToastProvider>
    );

    expect(view).toMatchSnapshot();
  });
});
