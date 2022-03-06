import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "..";

describe("Test Sheet", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Sheet>
        <SheetTrigger>Open dialog</SheetTrigger>
        <SheetContent>
          Content
          <SheetClose>Save changes</SheetClose>
        </SheetContent>
      </Sheet>
    );

    expect(view).toMatchSnapshot();
  });
});
