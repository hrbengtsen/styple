import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "..";

describe("Test Dialog", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>
          Content
          <DialogClose>Save changes</DialogClose>
        </DialogContent>
      </Dialog>
    );

    expect(view).toMatchSnapshot();
  });
});
