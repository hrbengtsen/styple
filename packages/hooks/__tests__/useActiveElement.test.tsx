import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useActiveElement } from "..";

function ActiveElementExample() {
  const activeElement = useActiveElement();

  return (
    <div>
      <button id="1">button 1</button>
      <button id="2">button 2</button>
      <div>Active: {activeElement?.id}</div>
    </div>
  );
}

describe("Test useActiveElement", () => {
  it("should work as expected", () => {
    render(<ActiveElementExample />);

    const button1 = screen.getByText(/button 1/i);
    const button2 = screen.getByText(/button 2/i);
    const active = screen.getByText(/active/i);

    // Active element is initially null
    expect(active).toHaveTextContent("Active:");

    userEvent.click(button1);
    expect(active).toHaveTextContent("Active: 1");

    userEvent.click(button2);
    expect(active).toHaveTextContent("Active: 2");
  });
});
