import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  allDocsRoutes,
  docsRoutes,
  PageProps,
  RouteProps
} from '../lib/docsRoutes';
import {
  Container,
  Flex,
  Text,
  Sidebar,
  Badge,
  Button
} from '../packages/design-system';
import { Sidebar as SidebarIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { Footer } from './Footer';
import { NavLinkItem } from './NavLinkItem';
import { ScrollShadow } from '../packages/design-system/components/ScrollShadow';

export const DocsPage = ({
  children
}: React.ComponentProps<typeof Container>) => {
  const router = useRouter();

  const currentPageSlug =
    typeof router.query.slug === 'string' &&
    router.pathname.substring(1).replace('[slug]', router.query.slug);

  const currentPageIndex = allDocsRoutes.findIndex(
    (page) => page.slug === currentPageSlug
  );
  const previous = allDocsRoutes[currentPageIndex - 1];
  const next = allDocsRoutes[currentPageIndex + 1];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setIsSidebarOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  return (
    <Container
      css={{
        pt: '$4xl'
      }}
    >
      <Sidebar
        css={{
          zIndex: '$2',
          position: 'fixed',
          left: 0,
          top: '$4xl',

          bg: '$bg200A',
          backdropFilter: 'blur(16px)',
          width: '100%',
          boxShadow: 'inset 0 -1px 2px -1px $colors$button100',

          '@bp3': {
            width: 250,
            bottom: 0,
            boxShadow: 'inset -1px 0 2px -1px $colors$button100'
          }
        }}
        side="left"
        bp="@bp3"
        open={isSidebarOpen}
        onOpenChange={(open) => setIsSidebarOpen(open)}
        content={
          <ScrollShadow withScrollArea>
            <Container css={{ px: '$lg' }}>
              {docsRoutes.map((routeSection: RouteProps) => (
                <Container key={routeSection.label} css={{ py: '$lg' }}>
                  <Text
                    css={{
                      fontWeight: '$bold',
                      mb: '$sm',
                      color: '$text100'
                    }}
                  >
                    {routeSection.label}
                  </Text>
                  <Container
                    as="ul"
                    css={{
                      listStyleType: 'none',
                      p: 0,
                      m: 0
                    }}
                  >
                    {routeSection.pages.map((page: PageProps) => (
                      <Container as="li" key={page.slug}>
                        {page.draft ? (
                          <Button
                            highlight
                            size="sm"
                            disabled
                            css={{
                              fontSize: '$xs',
                              my: '$xs'
                            }}
                          >
                            {page.title}{' '}
                            <Badge variant="primary">Coming...</Badge>
                          </Button>
                        ) : (
                          <NavLinkItem
                            highlight
                            size="sm"
                            href={`/${page.slug}`}
                            css={{
                              fontSize: '$xs',
                              '&.active': {
                                bg: '$bg300',
                                fontWeight: '$semibold'
                              },
                              my: '$xs'
                            }}
                          >
                            {page.title}
                          </NavLinkItem>
                        )}
                      </Container>
                    ))}
                  </Container>
                </Container>
              ))}
            </Container>
          </ScrollShadow>
        }
        mobileTitle="Documentation"
        mobileContent={
          <>
            {docsRoutes.map((routeSection: RouteProps) => (
              <Container key={routeSection.label} css={{ py: '$lg' }}>
                <Text
                  css={{ fontWeight: '$bold', mb: '$sm', color: '$text100' }}
                >
                  {routeSection.label}
                </Text>
                <Container
                  as="ul"
                  css={{
                    listStyleType: 'none',
                    p: 0,
                    m: 0
                  }}
                >
                  {routeSection.pages.map((page: PageProps) => (
                    <Container as="li" key={page.slug}>
                      {page.draft ? (
                        <Button
                          highlight
                          size="sm"
                          disabled
                          css={{
                            fontSize: '$xs',
                            my: '$xs'
                          }}
                        >
                          {page.title}{' '}
                          <Badge variant="primary">Coming soon</Badge>
                        </Button>
                      ) : (
                        <NavLinkItem
                          highlight
                          size="sm"
                          href={`/${page.slug}`}
                          css={{
                            fontSize: '$xs',
                            '&.active': {
                              bg: '$bg300',
                              fontWeight: '$semibold'
                            },
                            my: '$xs'
                          }}
                        >
                          {page.title}
                        </NavLinkItem>
                      )}
                    </Container>
                  ))}
                </Container>
              </Container>
            ))}
          </>
        }
        icon={
          <Flex
            css={{
              gap: '$xs',
              ml: '$sm'
            }}
          >
            <SidebarIcon style={{ verticalAlign: 'middle' }} />
            Menu
          </Flex>
        }
      />
      <Container
        css={{
          pl: 0,
          pr: 0,
          '@bp3': {
            pl: '250px'
          },
          '@bp4': {
            pr: '200px'
          }
        }}
      >
        {children}

        {(previous || next) && (
          <Flex
            css={{
              maxWidth: '768px',
              mx: 'auto',
              px: '$lg',
              mt: '$4xl',
              justifyContent: 'space-between'
            }}
          >
            {previous && (
              <NavLinkItem ghost href={`/${previous.slug}`}>
                <Text css={{ fontWeight: '$semibold', color: '$text300' }}>
                  Previous
                </Text>
                <Container
                  as="span"
                  css={{
                    display: 'inline-block',
                    transition: 'transform 200ms ease-in-out',
                    willChange: 'transform',
                    'a:hover &': {
                      transform: 'translateX(-2px)'
                    }
                  }}
                >
                  <ArrowLeft
                    size="16"
                    style={{ position: 'relative', top: '2px' }}
                  />
                </Container>{' '}
                {previous.title}
              </NavLinkItem>
            )}
            {next && (
              <NavLinkItem ghost href={`/${next.slug}`} css={{ ml: 'auto' }}>
                <Text
                  css={{
                    fontWeight: '$semibold',
                    color: '$text300',
                    textAlign: 'right'
                  }}
                >
                  Next
                </Text>
                {next.title}{' '}
                <Container
                  as="span"
                  css={{
                    display: 'inline-block',
                    transition: 'transform 200ms ease-in-out',
                    willChange: 'transform',
                    'a:hover &': {
                      transform: 'translateX(2px)'
                    }
                  }}
                >
                  <ArrowRight
                    size="16"
                    style={{ position: 'relative', top: '2px' }}
                  />
                </Container>
              </NavLinkItem>
            )}
          </Flex>
        )}
        <Footer />
      </Container>
    </Container>
  );
};
