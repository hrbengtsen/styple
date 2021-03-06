import Head from "next/head";
import {
  globalStyles,
  darkTheme,
  globalCss,
} from "../packages/design-system/stitches.config";
import { cozyTheme, deepTheme } from "../lib/customThemes";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { TooltipProvider } from "../packages/design-system";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import PlausibleProvider from "next-plausible";

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  // Set colorScheme for custom themes not compatible with next-themes
  globalCss({
    [`.${cozyTheme}`]: {
      colorScheme: "light",
    },
    [`.${deepTheme}`]: {
      colorScheme: "dark",
    },
  })();

  const router = useRouter();
  const isDocs = router.pathname.includes("/docs");

  return (
    <>
      <Head>
        <title>styple</title>
      </Head>
      <PlausibleProvider domain="styple.dev">
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{
            light: "light-theme",
            dark: darkTheme.className,
            deep: deepTheme.className,
            cozy: cozyTheme.className,
          }}
          enableSystem
          enableColorScheme
          defaultTheme="system"
        >
          <TooltipProvider delayDuration={600}>
            <Layout isDocs={isDocs}>
              <Component {...pageProps} />
            </Layout>
          </TooltipProvider>
        </ThemeProvider>
      </PlausibleProvider>
    </>
  );
}

export default App;
