import {
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  NavLinkItem,
  Card,
  Spinner,
  Avatar,
  AvatarGroup,
  Separator,
  Badge,
  TextField,
  TextArea,
  Label,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Toggle,
  Select,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  Status,
  Skeleton,
  Code,
  Tooltip,
  Popover,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Td,
  Th,
  Tr,
  Navbar,
  Sidebar,
  keyframes,
  Link,
} from "..";
import { Searchbar } from "../custom/Searchbar";
import { Plus, Trash2, Link as LinkIcon, GripVertical } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

// Keyframes for navbar examples
const slideRight = keyframes({
  from: { transform: "translateX(-32px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1, visibility: "visible" },
});
const openNav = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
});
const closeNav = keyframes({
  from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});
const openFullNav = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export default function Test() {
  const router = useRouter();
  const [fullpageNavState, setFullpageNavState] = useState<boolean>(false);

  return (
    <Flex
      css={{
        alignItems: "center",
        flexDirection: "column",
        gap: "$xxxl",
        py: "$xl",
      }}
    >
      {/*--------------- HEADING ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Heading component.</Text>
        <Heading
          css={{
            fontWeight: "$black",
            color: "$text100",
          }}
        >
          styple lorem ipsum
        </Heading>
        <Heading
          as="h2"
          css={{
            fontWeight: "$black",
            color: "$text200",
          }}
        >
          styple lorem ipsum
        </Heading>
        <Heading
          as="h3"
          css={{
            fontWeight: "$black",
            color: "$text300",
          }}
        >
          styple lorem ipsum
        </Heading>
      </Flex>

      {/*--------------- TEXT ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Text component.</Text>
        <Container>
          <Text size="md" color="primary">
            Primary colored text
          </Text>
          <Text size="md" color="accent">
            Accent colored text
          </Text>
          <Text size="md" color="danger">
            Danger colored text
          </Text>
          <Text size="md" color="success">
            Success colored text
          </Text>
        </Container>
      </Flex>

      {/*--------------- BUTTON ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Button component.</Text>
        <Flex
          css={{
            flexDirection: "column",
            gap: "$md",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button move>Move button</Button>
          <Button tactile>Tactile button</Button>
          <Button pill>Pill button</Button>
          <Button outline>Outline button</Button>
          <Button ghost>Ghost button</Button>
          <Button ghost>
            <Plus style={{ verticalAlign: "middle" }} />
          </Button>
          <Button highlight>Highlight button</Button>
          <Button highlight size="circle">
            <Plus style={{ verticalAlign: "middle" }} />
          </Button>
          <Button size="sm">Small button</Button>
          <Button size="md">Medium button</Button>
          <Button size="lg">Large button</Button>
          <Button disabled>Disabled button</Button>

          <Button variant="primary">Primary</Button>
          <Button variant="primary" outline>
            Primary outline
          </Button>
          <Button variant="primary" ghost>
            Primary ghost
          </Button>
          <Button variant="primary" transparent>
            Primary transparent
          </Button>

          <Button variant="accent">Accent</Button>
          <Button variant="accent" outline>
            Accent outline
          </Button>
          <Button variant="accent" ghost>
            Accent ghost
          </Button>
          <Button variant="accent" transparent>
            Accent transparent
          </Button>

          <Button variant="danger">Danger</Button>
          <Button variant="danger" outline>
            Danger outline
          </Button>
          <Button variant="danger" ghost>
            Danger ghost
          </Button>
          <Button variant="danger" transparent>
            Danger transparent
          </Button>

          <Button variant="success">Success</Button>
          <Button variant="success" outline>
            Success outline
          </Button>
          <Button variant="success" ghost>
            Success ghost
          </Button>
          <Button variant="success" transparent>
            Success transparent
          </Button>
        </Flex>
      </Flex>

      {/*--------------- NAV ITEM ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>
          NavItem (with Nextjs Link) components. They have all button variants +
          active variant.
        </Text>
        <Flex
          css={{
            flexDirection: "column",
            gap: "$md",
            alignItems: "center",
          }}
        >
          <Flex
            css={{
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem ghost href="/test">
              Home (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="/test2">
              Link (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Flex>
          <Flex
            css={{
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem active="bold" ghost href="/test">
              Home (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="/test2">
              Link (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Flex>
          <Flex
            css={{
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem active="both" ghost href="/test">
              Home (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="/test2">
              Link (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Flex>
        </Flex>
      </Flex>

      {/*--------------- LINK ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Link (with Nextjs Link) component.</Text>
        <Text>
          This is a text paragraph with some{" "}
          <Link variant="color" href="#">
            links like this
          </Link>
          . There are a couple different variants for{" "}
          <Link href="#">these links</Link> that you see here. That is all.
        </Text>
      </Flex>

      {/*--------------- CARD ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Card component.</Text>
        <Card css={{ p: "$lg", gap: "$sm", bg: "$bg300" }}>
          <Heading as="h3" size="lg">
            This is a card component
          </Heading>
          <Text
            css={{
              color: "$text300",
            }}
          >
            Lorem ipsum
          </Text>
          <Button>Button in Card</Button>
        </Card>
        <Card active css={{ p: "$lg", gap: "$sm", bg: "$bg100" }}>
          <Heading as="h3" size="lg">
            Active card component
          </Heading>
          <Text
            css={{
              color: "$text300",
            }}
          >
            Lorem ipsum
          </Text>
          <Button>Button in Card</Button>
        </Card>
        <Card
          as="a"
          href="#"
          interactive
          elavateOnDark
          css={{ p: "$lg", gap: "$sm", bg: "$bg300" }}
        >
          <Heading as="h3" size="lg">
            Interactive card variant
          </Heading>
          <Text
            css={{
              color: "$text300",
            }}
          >
            Try clicking this interactive card
          </Text>
          <Text
            css={{
              color: "$text300",
            }}
          >
            Lorem ipsum
          </Text>
        </Card>
        <Card
          as="a"
          href="https://www.bitetap.com/"
          interactive
          css={{
            p: "$lg",
          }}
        >
          <Image
            src="/bitetap-og.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="image-in-card"
            alt="Banner of the Bitetap app"
          />

          <Container>
            <Heading as="h3" size="lg" color="white">
              Card with image
            </Heading>
            <Text
              color="white"
              css={{
                opacity: ".9",
              }}
            >
              Try clicking this interactive card
            </Text>
            <Text
              color="white"
              css={{
                opacity: ".9",
              }}
            >
              Lorem ipsum
            </Text>
          </Container>
        </Card>
      </Flex>

      {/*--------------- SPINNER ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Spinner component.</Text>
        <Spinner />
      </Flex>

      {/*--------------- AVATAR ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "$md",
        }}
      >
        <Text>Avatar component.</Text>
        <Avatar fallback="M" />
        <Avatar fallback="M" size="md" />
        <Avatar fallback="M" size="lg" />
        <Avatar fallback="M" size="xl" />
        <Avatar src="/founder.webp" fallback="M" />
        <Avatar src="/founder.webp" fallback="M" size="md" />
        <Avatar src="/founder.webp" fallback="M" size="lg" />
        <Avatar src="/founder.webp" fallback="M" size="xl" />
        <Avatar src="/founder.webp" fallback="M" size="md" inactive />
        <Button
          ghost
          css={{
            p: "0",
          }}
        >
          <Avatar src="/founder.webp" fallback="M" size="md" interactive />
        </Button>

        <AvatarGroup>
          <Avatar src="/founder.webp" fallback="M" size="lg" />
          <Avatar src="/founder.webp" fallback="M" size="lg" />
          <Avatar src="/founder.webp" fallback="M" size="lg" />
          <Avatar src="/founder.webp" fallback="M" size="lg" />
        </AvatarGroup>
        <AvatarGroup limit={2}>
          <Avatar src="/founder.webp" fallback="M" size="lg" />
          <Avatar src="/founder.webp" fallback="M" size="lg" />
          <Avatar src="/founder.webp" fallback="M" size="lg" />
          <Avatar src="/founder.webp" fallback="M" size="lg" />
        </AvatarGroup>
        <AvatarGroup num={183}>
          <Avatar src="/founder.webp" fallback="M" />
          <Avatar src="/founder.webp" fallback="M" />
          <Avatar src="/founder.webp" fallback="M" />
        </AvatarGroup>
      </Flex>

      {/*--------------- SEPARATOR ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Separator component.</Text>
        <Separator />
        <Separator size="lg" />
        <Separator size="sm" />
        <Separator orientation="vertical" size="lg" />
        <Separator orientation="vertical" size="sm" />
      </Flex>

      {/*--------------- BADGE ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Badge component.</Text>
        <Badge>Small</Badge>
        <Badge size="lg">Large</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="success">Success</Badge>
        <Badge as="a" href="#" interactive>
          Interactive
        </Badge>
        <Badge as="button" disabled>
          Disabled
        </Badge>
      </Flex>

      {/*--------------- TEXT FIELD ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>TextField component.</Text>
        <TextField placeholder="Default textfield" />
        <TextField size="lg" placeholder="Large textfield" />
        <TextField size="lg" placeholder="Disabled textfield" disabled />
        <TextField size="lg" placeholder="Ghost textfield" variant="ghost" />
        <TextField size="lg" placeholder="Invalid textfield" state="invalid" />
        <TextField size="lg" placeholder="Valid textfield" state="valid" />
      </Flex>

      {/*--------------- SEARCH FIELD ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>SearchField component (uses TextField).</Text>
        <Searchbar />
      </Flex>

      {/*--------------- TEXT AREA ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>TextArea component.</Text>
        <TextArea placeholder="Default textarea" />
        <TextArea variant="ghost" placeholder="Ghost textarea" />
      </Flex>

      {/*--------------- LABEL ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Label component.</Text>
        <Container>
          <Label htmlFor="labelInput">Test label</Label>
          <TextField
            id="labelInput"
            size="lg"
            placeholder="Textfield with label"
          />
        </Container>
      </Flex>

      {/*--------------- CHECKBOX ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Checkbox component.</Text>
        <Checkbox />
      </Flex>

      {/*--------------- RADIO ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Radio component.</Text>
        <RadioGroup defaultValue="1">
          <Radio
            value="1"
            css={{
              mr: "$sm",
            }}
          />
          <Radio value="2" />
        </RadioGroup>
      </Flex>

      {/*--------------- SLIDER ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Slider component.</Text>
        <Slider defaultValue={[50]} max={100} step={1} />
        <Slider orientation="vertical" defaultValue={[50]} max={100} step={1} />
      </Flex>

      {/*--------------- SWITCH ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Switch component.</Text>
        <Switch />
      </Flex>

      {/*--------------- TOGGLE ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Toggle component.</Text>
        <Flex
          css={{
            gap: "$xs",
          }}
        >
          <Toggle
            css={{
              fontWeight: "$bold",
            }}
          >
            B
          </Toggle>
          <Toggle>I</Toggle>
          <Toggle
            css={{
              textDecoration: "underline",
            }}
          >
            U
          </Toggle>
        </Flex>
        <Toggle size="lg">L</Toggle>
      </Flex>

      {/*--------------- SELECT ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Select component.</Text>
        <Select>
          <option>Select 1</option>
          <option>Select 2</option>
          <option>Select 3</option>
        </Select>
        <Select size="lg">
          <option>Select 1</option>
          <option>Select 2</option>
          <option>Select 3</option>
        </Select>
      </Flex>

      {/*--------------- DIALOG ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Dialog and AlertDialog components.</Text>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent
            aria-labelledby="dialog-heading"
            aria-describedby="dialog-desc"
          >
            <Heading id="dialog-heading" as="h4" css={{ mb: "$md" }}>
              Dialog Heading
            </Heading>
            <Text id="dialog-desc" css={{ lineHeight: "25px" }}>
              This is just a bunch of random lorem ipsum dialog description
              text. There's more of it: This is just a bunch of random lorem
              ipsum dialog description text. There's more of it: This is just a
              bunch of random lorem ipsum dialog description text. There's more
              of it: This is just a bunch of random lorem ipsum dialog
              description text. There's more of it: This is just a bunch of
              random lorem ipsum dialog description text. There's no more of it.
            </Text>
            <TextArea placeholder="Default textarea" />
            <Switch />
            <Flex
              css={{
                justifyContent: "flex-end",
                marginTop: "$lg",
              }}
            >
              <DialogClose asChild>
                <Button transparent variant="success">
                  Close dialog
                </Button>
              </DialogClose>
            </Flex>
          </DialogContent>
        </Dialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Open alertdialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent
            aria-labelledby="alertdialog-heading"
            aria-describedby="alertdialog-desc"
          >
            <Heading id="alertdialog-heading" as="h4" css={{ mb: "$md" }}>
              AlertDialog Heading
            </Heading>
            <Text id="alertdialog-desc" css={{ lineHeight: "25px" }}>
              This is just a bunch of random lorem ipsum alertdialog description
              text. There's more of it: This is just a bunch of random lorem
              ipsum alertdialog description text. There's more of it: This is
              just a bunch of random lorem ipsum alertdialog description text.
              There's more of it: This is just a bunch of random lorem ipsum
              alertdialog description text. There's more of it: This is just a
              bunch of random lorem ipsum alertdialog description text. There's
              no more of it.
            </Text>
            <Flex
              css={{
                justifyContent: "flex-end",
                marginTop: "$lg",
                gap: "$md",
              }}
            >
              <AlertDialogCancel asChild>
                <Button highlight>Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button transparent variant="success">
                  Save changes
                </Button>
              </AlertDialogAction>
            </Flex>
          </AlertDialogContent>
        </AlertDialog>
      </Flex>

      {/*--------------- SHEET ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Sheet component.</Text>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open sheet</Button>
          </SheetTrigger>
          <SheetContent
            aria-labelledby="sheet-heading"
            aria-describedby="sheet-desc"
          >
            <Heading id="sheet-heading" as="h4" css={{ mb: "$md" }}>
              Sheet Heading
            </Heading>
            <Text id="sheet-desc" css={{ lineHeight: "25px" }}>
              This is just a bunch of random lorem ipsum sheet description text.
              There's more of it: This is just a bunch of random lorem ipsum
              sheet description text. There's more of it: This is just a bunch
              of random lorem ipsum sheet description text. There's more of it:
              This is just a bunch of random lorem ipsum sheet description text.
              There's more of it: This is just a bunch of random lorem ipsum
              sheet description text. There's no more of it.
            </Text>
            <Flex
              css={{
                justifyContent: "flex-end",
                marginTop: "$lg",
              }}
            >
              <SheetClose asChild>
                <Button transparent variant="success">
                  Close sheet
                </Button>
              </SheetClose>
            </Flex>
          </SheetContent>
        </Sheet>
      </Flex>

      {/*--------------- DROPDOWN ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Dropdown component.</Text>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Dropdown</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem css={{ color: "$text100" }}>
              Item 1
            </DropdownMenuItem>
            <DropdownMenuItem css={{ color: "$text300" }}>
              Item 2
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem>Checkbox</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Menu label</DropdownMenuLabel>
            <DropdownMenuItem
              onSelect={(e) => {
                router.push("/test2");
              }}
            >
              <LinkIcon size="16" style={{ marginRight: "8px" }} /> Link item
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 size="16" style={{ marginRight: "8px" }} /> Action item
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Disabled item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Flex>

      {/*--------------- COMBOBOX ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>
          Combobox component (should have example with one like a
          dropdown/select and one which opens like a dialog).
        </Text>
      </Flex>

      {/*--------------- ACCORDION ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Accordion component.</Text>
        <Accordion
          type="single"
          css={{
            width: "320px",
          }}
        >
          <AccordionItem value="accordion-one">
            <AccordionTrigger>
              <Text>Accordion one</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text css={{ p: "$sm" }}>
                This is just a bunch of random lorem ipsum sheet description
                text. There's more of it: This is just a bunch of random lorem
                ipsum sheet description text. There's more of it: This is just a
                bunch of random lorem ipsum sheet description text. There's more
                of it: This is just a bunch of random lorem ipsum sheet
                description text. There's more of it: This is just a bunch of
                random lorem ipsum sheet description text. There's no more of
                it.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accordion-two">
            <AccordionTrigger>
              <Text>Accordion two</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text css={{ p: "$sm" }}>
                This is just a bunch of random lorem ipsum sheet description
                text. There's more of it: This is just a bunch of random lorem
                ipsum sheet description text. There's more of it: This is just a
                bunch of random lorem ipsum sheet description text. There's more
                of it: This is just a bunch of random lorem ipsum sheet
                description text. There's more of it: This is just a bunch of
                random lorem ipsum sheet description text. There's no more of
                it.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accordion-three">
            <AccordionTrigger>
              <Text>Accordion three</Text>
            </AccordionTrigger>
            <AccordionContent>
              <Text css={{ p: "$sm" }}>
                This is just a bunch of random lorem ipsum sheet description
                text. There's more of it: This is just a bunch of random lorem
                ipsum sheet description text. There's more of it: This is just a
                bunch of random lorem ipsum sheet description text. There's more
                of it: This is just a bunch of random lorem ipsum sheet
                description text. There's more of it: This is just a bunch of
                random lorem ipsum sheet description text. There's no more of
                it.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Flex>

      {/*--------------- COLLAPSIBLE ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Collapsible component.</Text>
      </Flex>

      {/*--------------- NAVIGATION ---------------*/}
      <Container
        css={{
          width: "100%",
        }}
      >
        <Flex
          css={{
            flexDirection: "column",
            gap: "$md",
            alignItems: "flex-start",
            maxWidth: "$xxxxl",
            mx: "auto",
          }}
        >
          <Text>Navigation components.</Text>
          <Container
            css={{
              width: "100%",
              bg: "$bg300",
            }}
          >
            <Navbar
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "$md",
                height: "$xl",
              }}
              brand={<Text>Basic navbar</Text>}
              content={
                <Flex>
                  <NavLinkItem ghost href="/">
                    Link 1
                  </NavLinkItem>
                  <NavLinkItem ghost href="/test2">
                    Link 2
                  </NavLinkItem>
                  <NavLinkItem ghost href="https://www.bitetap.com/">
                    Link 3
                  </NavLinkItem>
                </Flex>
              }
              mobileContent={
                <Flex
                  css={{
                    "@bp2": {
                      display: "none",
                    },
                    flexDirection: "column",
                    width: "100%",
                    '&[data-state="open"]': {
                      animation: `${openNav} 125ms ease-out`,
                    },
                    '&[data-state="closed"]': {
                      animation: `${closeNav} 125ms ease-out`,
                    },
                  }}
                >
                  <NavLinkItem ghost href="/">
                    Link 1
                  </NavLinkItem>
                  <NavLinkItem ghost href="/test2">
                    Link 2
                  </NavLinkItem>
                  <NavLinkItem ghost href="https://www.bitetap.com/">
                    Link 3
                  </NavLinkItem>
                </Flex>
              }
            />
          </Container>
          <Container
            css={{
              width: "100%",
              bg: "$bg300",
            }}
          >
            <Navbar
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "$md",
                height: "$xl",
              }}
              brand={<Text>Fullpage navbar</Text>}
              content={
                <Flex>
                  <NavLinkItem ghost href="/">
                    Link 1
                  </NavLinkItem>
                  <NavLinkItem ghost href="/test2">
                    Link 2
                  </NavLinkItem>
                  <NavLinkItem ghost href="https://www.bitetap.com/">
                    Link 3
                  </NavLinkItem>
                </Flex>
              }
              mobileContent={
                <Flex
                  css={{
                    "@bp2": {
                      display: "none",
                    },
                    flexDirection: "column",
                    position: "fixed",
                    bg: "$bg300A",
                    backdropFilter: "blur(16px)",
                    animation: `${openFullNav} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                    zIndex: "$max",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Button
                    onClick={() => setFullpageNavState(!fullpageNavState)}
                  >
                    Close
                  </Button>
                  <NavLinkItem
                    ghost
                    href="/"
                    css={{
                      animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                      animationFillMode: "forwards",
                      willChange: "transform",
                      visibility: "hidden",
                    }}
                  >
                    Link 1
                  </NavLinkItem>
                  <NavLinkItem
                    ghost
                    href="/test2"
                    css={{
                      animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                      animationDelay: "75ms",
                      animationFillMode: "forwards",
                      willChange: "transform",
                      visibility: "hidden",
                    }}
                  >
                    Link 2
                  </NavLinkItem>
                  <NavLinkItem
                    ghost
                    href="https://www.bitetap.com/"
                    css={{
                      animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                      animationDelay: "150ms",
                      animationFillMode: "forwards",
                      willChange: "transform",
                      visibility: "hidden",
                    }}
                  >
                    Link 3
                  </NavLinkItem>
                </Flex>
              }
              open={fullpageNavState}
              onOpenChange={(open) => {
                if (open && typeof document !== "undefined") {
                  document.body.style.overflowY = "hidden";
                } else if (typeof document !== "undefined") {
                  document.body.style.overflowY = "auto";
                }

                setFullpageNavState(open);
              }}
            />
          </Container>
          <Container
            css={{
              width: "100%",
              bg: "$bg300",
            }}
          >
            <Sidebar
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "$md",
                height: "$xl",
              }}
              brand={<Text>Sidebar (like navbar + sheet here)</Text>}
              content={
                <Flex>
                  <NavLinkItem ghost href="/">
                    Link 1
                  </NavLinkItem>
                  <NavLinkItem ghost href="/test2">
                    Link 2
                  </NavLinkItem>
                  <NavLinkItem ghost href="https://www.bitetap.com/">
                    Link 3
                  </NavLinkItem>
                </Flex>
              }
              mobileContent={
                <>
                  <NavLinkItem ghost href="/">
                    Link 1
                  </NavLinkItem>
                  <NavLinkItem ghost href="/test2">
                    Link 2
                  </NavLinkItem>
                  <NavLinkItem ghost href="https://www.bitetap.com/">
                    Link 3
                  </NavLinkItem>
                </>
              }
            />
          </Container>
        </Flex>
      </Container>

      {/*--------------- TABS ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Tabs component.</Text>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <Text>Account tab content is here</Text>
          </TabsContent>
          <TabsContent value="tab2">
            <Text>Settings tab content is here</Text>
          </TabsContent>
        </Tabs>
      </Flex>

      {/*--------------- SKELETON ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Skeleton component.</Text>
        <Flex
          css={{
            gap: "$md",
          }}
        >
          <Skeleton variant="avatarSm" />
          <Skeleton variant="avatarMd" />
          <Skeleton variant="avatarLg" />
          <Skeleton variant="avatarXl" />
        </Flex>
        <Skeleton
          variant="title"
          css={{
            width: "100%",
          }}
        />
        <Skeleton
          variant="heading"
          css={{
            width: "100%",
          }}
        />
        <Skeleton
          css={{
            width: "100%",
          }}
        />
        <Skeleton variant="buttonSm" />
        <Skeleton variant="buttonMd" />
        <Skeleton variant="buttonLg" />
        <Skeleton variant="badgeSm" />
        <Skeleton variant="badgeLg" />
        <Skeleton variant="card" />
      </Flex>

      {/*--------------- Status ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Status component.</Text>
        <Flex
          css={{
            gap: "$md",
          }}
        >
          <Container>
            <Status />
            <Status size="lg" />
          </Container>
          <Container>
            <Status variant="primary" />
            <Status size="lg" variant="primary" />
          </Container>
          <Container>
            <Status variant="accent" />
            <Status size="lg" variant="accent" />
          </Container>
          <Container>
            <Status variant="danger" />
            <Status size="lg" variant="danger" />
          </Container>
          <Container>
            <Status variant="success" />
            <Status size="lg" variant="success" />
          </Container>
        </Flex>
      </Flex>

      {/*--------------- TOOLTIP ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Tooltip component.</Text>
        <Tooltip content="Tooltip content">
          <Button highlight size="circle">
            <Plus style={{ verticalAlign: "middle" }} />
          </Button>
        </Tooltip>
        <Tooltip
          content={
            <>
              <b>Drag</b> to move <br /> <b>Click</b> to open menu
            </>
          }
        >
          <Button highlight css={{ p: "0", borderRadius: "$md" }}>
            <GripVertical style={{ verticalAlign: "middle" }} />
          </Button>
        </Tooltip>
      </Flex>

      {/*--------------- POPOVER ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Popover component.</Text>
        <Popover content="Popover content">
          <Button highlight size="circle">
            <Plus style={{ verticalAlign: "middle" }} />
          </Button>
        </Popover>
        <Popover
          content={
            <>
              <b>Drag</b> to move <br /> <b>Click</b> to open menu
            </>
          }
        >
          <Button highlight css={{ p: "0", borderRadius: "$md" }}>
            <GripVertical style={{ verticalAlign: "middle" }} />
          </Button>
        </Popover>
      </Flex>

      {/*--------------- CODE ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Code component.</Text>
        <Text>
          This is a text block with some code:{" "}
          <Code>console.log("Styple")</Code> in between the rest of the text
          block.
        </Text>
      </Flex>

      {/*--------------- TABLE ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Table component.</Text>
        <Table
          css={{
            maxWidth: "$xxxxl",
          }}
        >
          <Thead>
            <Tr>
              <Th>Prop</Th>
              <Td>Type</Td>
              <Td>Default</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>
                <Code>defaultOpen</Code>
              </Th>
              <Td>
                <Code color="normal">boolean</Code>
              </Td>
              <Td>-</Td>
            </Tr>
            <Tr>
              <Th>
                <Code>open</Code>
              </Th>
              <Td>
                <Code color="normal">boolean</Code>
              </Td>
              <Td>-</Td>
            </Tr>
            <Tr>
              <Th>
                <Code>onOpenChange</Code>
              </Th>
              <Td>
                <Code color="normal">boolean</Code>
              </Td>
              <Td>-</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>
                <Code>modal</Code>
              </Th>
              <Td>
                <Code color="normal">boolean</Code>
              </Td>
              <Td>
                <Code color="normal">true</Code>
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </Flex>

      <Separator />

      {/*--------------- GRADIENTS ---------------*/}
      <Flex
        css={{
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Gradient examples.</Text>
        <Flex
          css={{
            flexDirection: "column",
            gap: "$xxl",
          }}
        >
          <Button
            css={{
              position: "relative",
              "&::before": {
                content: "",
                position: "absolute",
                top: "4px",
                bottom: "0px",
                left: "4px",
                right: "4px",
                zIndex: "-1",
                opacity: "0.6",
                filter: "blur(16px)",
                background:
                  "conic-gradient(from 90deg at 50% 50%, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)",
                borderRadius: "$md",
              },
            }}
          >
            Button pseudo gradient
          </Button>
          <Button
            css={{
              boxShadow:
                "0 0 0 2px rgba(255, 255, 255, 0.25), -16px 0 32px -16px #870160, 0 0 32px -16px #ac255e, 16px 0 32px -16px #ffb56b",
            }}
          >
            Button shadow gradient
          </Button>
          <Card
            as="a"
            href="#"
            interactive
            css={{
              p: "$xs",
              gap: "$sm",
              background:
                "linear-gradient(to right, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
            }}
          >
            <Container
              css={{
                bg: "$bg300",
                p: "$lg",
                borderRadius: "$lg",
              }}
            >
              <Heading as="h3" size="lg">
                Gradient card
              </Heading>
              <Text
                css={{
                  color: "$text300",
                }}
              >
                Try clicking this interactive card
              </Text>
              <Text
                css={{
                  color: "$text300",
                }}
              >
                Lorem ipsum
              </Text>
            </Container>
          </Card>
          <Grid
            css={{
              maxWidth: "calc(256px + $xs)",
              gridTemplateColumns: "1fr 1fr",
              gap: "$xs",
            }}
          >
            <Container
              css={{
                width: "$xxxl",
                height: "$xxl",
                borderRadius: "$xxl",
                background:
                  "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
              }}
            />
            <Container
              css={{
                width: "$xxxl",
                height: "$xxl",
                borderRadius: "$xxl",
                background: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
              }}
            />
            <Container
              css={{
                width: "$xxxl",
                height: "$xxl",
                borderRadius: "$xxl",
                background: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
              }}
            />
            <Container
              css={{
                width: "$xxxl",
                height: "$xxl",
                borderRadius: "$xxl",
                background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
              }}
            />
            <Container
              css={{
                width: "$xxxl",
                height: "$xxl",
                borderRadius: "$xxl",
                background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
              }}
            />
            <Container
              css={{
                width: "$xxxl",
                height: "$xxl",
                borderRadius: "$xxl",
                background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
              }}
            />
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}
