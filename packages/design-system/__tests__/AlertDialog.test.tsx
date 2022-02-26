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
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <AlertDialog>
        <AlertDialogTrigger>Open alertdialog</AlertDialogTrigger>
        <AlertDialogContent>
          Content
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save changes</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
  });

  it("should render as expected", () => {
    expect(rendered).toMatchSnapshot();
  });
});
