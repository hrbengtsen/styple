import {
  Button,
  CommandPalette,
  DataObj,
  Flex
} from '../packages/design-system';
import { Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { NavLinkItem } from './NavLinkItem';

const dummyCategories = ['Final docs pages'];

const dummyData: DataObj[] = [
  {
    label: 'Do custom action',
    action: () => {
      alert('Custom action');
    }
  },
  {
    label: 'Introduction',
    slug: '/docs/overview/introduction',
    icon: <Search />
  },
  {
    label: 'Getting started',
    slug: '/docs/overview/getting-started'
  },
  {
    label: 'Toast',
    slug: '/docs/components/toast',
    category: dummyCategories[0]
  }
];

// Boilerplate component of how to implement a CommandPalette
export const CommandPaletteContainer = () => {
  const router = useRouter();

  return <CommandPalette />;
};

/*
  CMDPALETTE todos:
  - improve performance (re-renders too often with too much computation)
*/
