import { Badge, Text } from "..";

type ReleaseType = React.ComponentProps<typeof Badge> & {
  name: string;
  version: string;
  current?: boolean;
};

export const Release = ({ name, version, current = false }: ReleaseType) => (
  <Text
    size="md"
    css={{
      mb: "$lg",
      fontWeight: "$bold",
      display: "flex",
      alignItems: "center",
      gap: "$sm",
    }}
  >
    {name}{" "}
    <Badge
      variant={`${current ? "primary" : "normal"}`}
      css={{ fontWeight: "$semibold" }}
    >
      {version}
    </Badge>
  </Text>
);
