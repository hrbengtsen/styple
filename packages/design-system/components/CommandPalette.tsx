import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { Button, TextField } from "..";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { StyledOverlay, StyledContent } from "./Dialog";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const useEscape = (onEscape: () => void) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.addEventListener("keydown", handleEsc);
    };
  });
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  useEscape(() => setOpen(false));

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <Button>Open CommandPalette</Button>
      </DialogPrimitive.Trigger>
      <StyledOverlay>
        <StyledContent>
          <Combobox
            value={selectedPerson}
            onChange={setSelectedPerson}
            nullable
          >
            <Combobox.Input
              as={TextField}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Options static>
              {filteredPeople.map((person) => (
                <Combobox.Option key={person} value={person}>
                  {person}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Root>
  );
}
