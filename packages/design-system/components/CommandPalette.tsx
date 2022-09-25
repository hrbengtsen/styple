import { ReactElement, useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Button, NavItem, TextField, Container, Separator, Flex } from '..';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { StyledOverlay, StyledContent } from './Dialog';
import { Search } from 'lucide-react';
import { css, keyframes } from '../stitches.config';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

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
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command.Dialog>
  );
}
