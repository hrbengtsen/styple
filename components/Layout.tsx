import React from "react";
import { Container } from "../packages/design-system";
import { Header } from "./Header";
import { DocsPage } from "./DocsPage";
import { Footer } from "./Footer";

type LayoutProps = React.ComponentProps<typeof Container> & {
  isDocs: boolean;
};

export function Layout({ children, isDocs }: LayoutProps) {
  return (
    <Container>
      <Header />
      {isDocs ? (
        <DocsPage>{children}</DocsPage>
      ) : (
        <Container
          css={{
            pt: "$4xl",
          }}
        >
          {children}
        </Container>
      )}

      {/* In docs: footer should be centered with mdx, as such its defined in DocsPage */}
      {!isDocs && <Footer />}
    </Container>
  );
}
