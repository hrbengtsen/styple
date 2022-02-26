import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogAction,
} from "..";

describe("Test AlertDialog", () => {
  it("should render as expected", () => {
    const view: RenderResult = render(
      <AlertDialog>
        <AlertDialogTrigger>Open alertdialog</AlertDialogTrigger>
        <AlertDialogContent>
          Content
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save changes</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );

    expect(view).toMatchSnapshot();
  });
});
