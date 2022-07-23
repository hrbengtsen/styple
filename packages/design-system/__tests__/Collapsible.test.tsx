import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "..";

describe("Test Collapsible", () => {
  let view: RenderResult;

  beforeEach(() => {
    view = render(
      <Collapsible>
        <CollapsibleTrigger>Trigger</CollapsibleTrigger>
        <CollapsibleContent data-testid="content">Content.</CollapsibleContent>
      </Collapsible>
    );
  });

  it("should render as expected", () => {
    expect(view).toMatchSnapshot();
  });

  it("should be collapsible", () => {
    const trigger: HTMLElement = screen.getByText("Trigger");
    const content: HTMLElement = screen.getByTestId("content");

    fireEvent.click(trigger);
    expect(content).toHaveAttribute("data-state", "open");
    fireEvent.click(trigger);
    expect(content).toHaveAttribute("data-state", "closed");
  });
});
