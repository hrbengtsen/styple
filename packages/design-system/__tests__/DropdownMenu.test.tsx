import * as React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "..";

describe("Test DropdownMenu", () => {
  let view: RenderResult;

  beforeEach(() => {
    view = render(
      <DropdownMenu open={true}>
        <DropdownMenuTrigger>trigger</DropdownMenuTrigger>
        <DropdownMenuContent portalled={false}>
          <DropdownMenuLabel>label</DropdownMenuLabel>
          <DropdownMenuItem>item</DropdownMenuItem>
          <DropdownMenuCheckboxItem>checkbox</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  });

  it("should render as expected", () => {
    expect(view).toMatchSnapshot();
  });

  it("should support custom onChange", async () => {
    const trigger: HTMLElement = screen.getByText("trigger");

    // dropdowncontent is not rendered in jsdom when clicking trigger, figure out how to fix or just test with open={true} as above

    // Open dropdown
    //fireEvent.click(trigger);

    //const checkbox: HTMLElement = await screen.findByText("checkbox");

    //expect(checkbox).not.toBeChecked();
    //fireEvent.click(checkbox);
    //expect(checkbox).toBeChecked();
    //screen.debug();
  });
});
