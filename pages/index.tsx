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
  AvatarGroupItem,
} from "..";
import { ThemeButton } from "../custom/ThemeButton";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "$xl",
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
            color: "$textLight",
          }}
        >
          styple lorem ipsum
        </Heading>
        <Heading
          as="h2"
          css={{
            fontWeight: "$black",
            color: "$textNormal",
          }}
        >
          styple lorem ipsum
        </Heading>
        <Heading
          as="h3"
          css={{
            fontWeight: "$black",
            color: "$textDark",
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
          Nav(Link)Item (with Nextjs Link) components. They have all button
          variants + active variant.
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
        <Card css={{ p: "$lg", gap: "$sm", bg: "$bgDark" }}>
          <Heading as="h3" size="lg">
            This is a card component
          </Heading>
          <Text
            css={{
              color: "$textDark",
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
          css={{ p: "$lg", gap: "$sm", bg: "$bgLight" }}
        >
          <Heading as="h3" size="lg">
            Interactive card variant
          </Heading>
          <Text
            css={{
              color: "$textDark",
            }}
          >
            Try clicking this interactive card
          </Text>
          <Text
            css={{
              color: "$textDark",
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

        <AvatarGroup>
          <AvatarGroupItem>
            <Avatar src="/founder.webp" fallback="M" size="md" />
          </AvatarGroupItem>
          <AvatarGroupItem>
            <Avatar src="/founder.webp" fallback="M" size="md" />
          </AvatarGroupItem>
          <AvatarGroupItem>
            <Avatar src="/founder.webp" fallback="M" size="md" />
          </AvatarGroupItem>
          <AvatarGroupItem>
            <Avatar src="/founder.webp" fallback="M" size="md" />
          </AvatarGroupItem>
        </AvatarGroup>
      </Container>
    </Container>
  );
}
