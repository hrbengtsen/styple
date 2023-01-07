import { ReactElement, useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Button, NavItem, TextField, Container, Separator, Flex } from '..';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { StyledOverlay, StyledContent } from './Dialog';
import { Search } from 'lucide-react';
import { css, keyframes, styled } from '../stitches.config';

const contentFadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -2%) scale(.9)' },
  '100%': { opacity: 1, transform: 'translate(-50%, 0) scale(1)' }
});

const StyledCommandInput = styled(Command.Input, TextField);

type DataSubItem = {
  label: string;
  icon?: ReactElement<any, any>;
} & (
  | { slug: string; action?: never } // Required to have atleast one of these props
  | { slug?: never; action: () => void }
  | { slug: string; action: () => void }
);

type DataGroup = {
  label: string;
  subItems: DataSubItem[];
};

export type DataItem = DataGroup | DataSubItem;

type CommandPaletteProps = {
  data: DataItem[];
  categories?: string[];
  filterData?: (query: string, data: DataItem[]) => DataItem[];
  preview?: (selectedValue: string, data: DataItem[]) => JSX.Element;
  trigger: JSX.Element;
  displayOptionsOnEmpty?: boolean;
  placeholder?: string;
  router: any;
  customLink?: any;
};

export function CommandPalette({ data }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen(!open);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger>Trigger</DialogPrimitive.Trigger>
      <StyledOverlay>
        <StyledContent
          css={{
            '@bp1': {
              minWidth: '$4xl',
              //maxWidth: preview ? '800px' : undefined,
              overflowY: 'hidden',
              top: '10%',
              transform: 'translate(-50%, 0)',
              animation: `${contentFadeIn} .15s ease-out`,
              '@motion': {
                animation: 'none'
              }
            }
          }}
        >
          <Command label="Global Command Menu">
            <StyledCommandInput
              value={selectedValue}
              onValueChange={setSelectedValue}
            />
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>

              {data.map((item) => {
                const itemAsGroup = item as DataGroup;
                const itemAsSubItem = item as DataSubItem;

                if (itemAsGroup.subItems) {
                  return (
                    <Command.Group heading={item.label} key={item.label}>
                      {itemAsGroup.subItems?.map((subItem) => (
                        <Command.Item key={subItem.label} value={subItem.label}>
                          {subItem.icon}
                          {subItem.label}
                        </Command.Item>
                      ))}
                    </Command.Group>
                  );
                }

                return (
                  <Command.Item key={item.label} value={item.label}>
                    {itemAsSubItem.icon}
                    {itemAsSubItem.label}
                  </Command.Item>
                );
              })}
            </Command.List>
          </Command>
        </StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Root>
  );
}
