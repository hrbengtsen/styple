import {
  Container,
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
  Status,
  Skeleton,
} from "..";
import { ThemeButton } from "../custom/ThemeButton";
import { Searchbar } from "../custom/Searchbar";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "$xxxl",
        py: "$xl",
      }}
    >
      <ThemeButton />
      {/*--------------- HEADING ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- TEXT ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- BUTTON ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Button component.</Text>
        <Container
          css={{
            display: "flex",
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
        </Container>
      </Container>

      {/*--------------- NAV ITEM ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>
          NavItem (with Nextjs Link) components. They have all button variants +
          active variant.
        </Text>
        <Container
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$md",
            alignItems: "center",
          }}
        >
          <Container
            css={{
              display: "flex",
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem ghost href="/">
              Home (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="/test">
              Link (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Container>
          <Container
            css={{
              display: "flex",
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem active="bold" ghost href="/">
              Home (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="/test">
              Link (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Container>
          <Container
            css={{
              display: "flex",
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem active="both" ghost href="/">
              Home (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="/test">
              Link (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Container>
        </Container>
      </Container>

      {/*--------------- CARD ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Card component.</Text>
        <Card css={{ p: "$lg", gap: "$sm", bg: "$bg100" }}>
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
      </Container>

      {/*--------------- SPINNER ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Spinner component.</Text>
        <Spinner />
      </Container>

      {/*--------------- AVATAR ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- SEPARATOR ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- BADGE ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- TEXT FIELD ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- SEARCH FIELD ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>SearchField component (uses TextField).</Text>
        <Searchbar />
      </Container>

      {/*--------------- TEXT AREA ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>TextArea component.</Text>
        <TextArea placeholder="Default textarea" />
        <TextArea variant="ghost" placeholder="Ghost textarea" />
      </Container>

      {/*--------------- LABEL ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- CHECKBOX ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Checkbox component.</Text>
        <Checkbox />
      </Container>

      {/*--------------- RADIO ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- SLIDER ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Slider component.</Text>
        <Slider defaultValue={[50]} max={100} step={1} />
        <Slider orientation="vertical" defaultValue={[50]} max={100} step={1} />
      </Container>

      {/*--------------- SWITCH ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Switch component.</Text>
        <Switch />
      </Container>

      {/*--------------- TOGGLE ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Toggle component.</Text>
        <Container
          css={{
            display: "flex",
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
        </Container>
        <Toggle size="lg">L</Toggle>
      </Container>

      {/*--------------- SELECT ---------------*/}
      <Container
        css={{
          display: "flex",
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
      </Container>

      {/*--------------- DIALOG ---------------*/}
      <Container
        css={{
          display: "flex",
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
            <Container
              css={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "$lg",
              }}
            >
              <DialogClose asChild>
                <Button transparent variant="success">
                  Close dialog
                </Button>
              </DialogClose>
            </Container>
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
            <Container
              css={{
                display: "flex",
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
            </Container>
          </AlertDialogContent>
        </AlertDialog>
      </Container>

      {/*--------------- SHEET ---------------*/}
      <Container
        css={{
          display: "flex",
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
            <Container
              css={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "$lg",
              }}
            >
              <SheetClose asChild>
                <Button transparent variant="success">
                  Close sheet
                </Button>
              </SheetClose>
            </Container>
          </SheetContent>
        </Sheet>
      </Container>

      {/*--------------- DROPDOWN ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Dropdown component.</Text>
      </Container>

      {/*--------------- ACCORDION ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Accordion component.</Text>
      </Container>

      {/*--------------- COLLAPSIBLE ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Collapsible component.</Text>
      </Container>

      {/*--------------- TABS ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Tabs component.</Text>
      </Container>

      {/*--------------- SKELETON ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Skeleton component.</Text>
        <Container
          css={{
            display: "flex",
            gap: "$md",
          }}
        >
          <Skeleton variant="avatarSm" />
          <Skeleton variant="avatarMd" />
          <Skeleton variant="avatarLg" />
          <Skeleton variant="avatarXl" />
        </Container>
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
        <Skeleton variant="buttonLg" />
        <Skeleton variant="card" />
      </Container>

      {/*--------------- Status ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Status component.</Text>
        <Container
          css={{
            display: "flex",
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
        </Container>
      </Container>

      {/*--------------- POPOVER ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Popover component.</Text>
      </Container>

      {/*--------------- SECTION ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Section component.</Text>
      </Container>

      {/*--------------- CODE ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
          alignItems: "flex-start",
        }}
      >
        <Text>Code component.</Text>
      </Container>
    </Container>
  );
}
