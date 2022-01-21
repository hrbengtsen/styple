import React from "react";
import { Button, Container, TextField } from "..";
import { Search, X } from "lucide-react";

type SearchFieldProps = React.ComponentProps<typeof TextField> & {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  keyPressed: React.KeyboardEventHandler<HTMLInputElement>;
};

export const SearchField = React.forwardRef<
  React.ElementRef<typeof TextField>,
  SearchFieldProps
>(({ query, setQuery, keyPressed, ...props }, forwardedRef) => {
  return (
    <Container css={{ position: "relative" }}>
      <Container
        css={{
          color: "$text200",
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: "$sm",
        }}
      >
        <Search size="20" />
      </Container>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => keyPressed(e)}
        ref={forwardedRef}
        css={{
          px: "$2xl",
        }}
        {...props}
      />
      {query != "" && (
        <Button
          ghost
          css={{
            position: "absolute",
            top: "0",
            right: "0",
            height: "100%",
            px: "$xs",
            mx: "$xs",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setQuery("")}
        >
          <X size="20" />
        </Button>
      )}
    </Container>
  );
});
