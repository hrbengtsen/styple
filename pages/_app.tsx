import Head from "next/head";
import {
  globalStyles,
  darkTheme,
} from "../packages/design-system/stitches.config";
import { cozyTheme, deepTheme } from "../lib/customThemes";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { TooltipProvider } from "../packages/design-system";
import { Layout } from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <title>styple design system</title>
      </Head>
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
