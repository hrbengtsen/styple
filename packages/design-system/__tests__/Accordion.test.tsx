import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "..";

describe("Test Accordion", () => {
  let view: RenderResult;

  beforeEach(() => {
    view = render(
      <Accordion type="single">
        <AccordionItem value="accordion-one">
          <AccordionTrigger>Accordion one</AccordionTrigger>
          <AccordionContent data-testid="content-one">
            A section of content one.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="accordion-two">
          <AccordionTrigger>Accordion two</AccordionTrigger>
          <AccordionContent>A section of content two.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  });

  it("should render as expected", () => {
    expect(view).toMatchSnapshot();
  });

  it("should be collapsible when type is single", () => {
    const trigger: HTMLElement = screen.getByText("Accordion one");
    const content: HTMLElement = screen.getByTestId("content-one");

    fireEvent.click(trigger);
    expect(content).toHaveAttribute("data-state", "open");
    fireEvent.click(trigger);
    expect(content).toHaveAttribute("data-state", "closed");
  });
});
