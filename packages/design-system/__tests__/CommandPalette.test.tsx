import * as React from 'react';
import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor
} from '@testing-library/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '..';

describe('Test DropdownMenu', () => {
  let view: RenderResult;

  const mockOnChange = jest.fn((bool) => bool);

  beforeEach(() => {
    view = render(
      <DropdownMenu>
        <DropdownMenuTrigger>trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>label</DropdownMenuLabel>
          <DropdownMenuItem>item</DropdownMenuItem>
          <DropdownMenuCheckboxItem onChange={mockOnChange}>
            checkbox
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  });

  it('should render as expected', () => {
    expect(view).toMatchSnapshot();
  });

  it('should support custom onChange', () => {
    const trigger: HTMLElement = screen.getByText('trigger');

    // Open dropdown
    fireEvent.pointerDown(
      trigger,
      new PointerEvent('pointerdown', {
        ctrlKey: false,
        button: 0
      })
    );

    const checkbox: HTMLElement = screen.getByText('checkbox');

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    // Check onChange was called just once, when checkbox was clicked
    expect(mockOnChange.mock.calls.length).toBe(1);

    // Check onChange was called with correct value
    expect(mockOnChange.mock.calls[0][0]).toBe(true);
  });
});
