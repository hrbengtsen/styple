import Head from "next/head";
import {
  globalStyles,
  darkTheme,
  cozyTheme,
  deepTheme,
} from "../stitches.config";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { TooltipProvider } from "..";

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
        <TooltipProvider delayDuration={500}>
          <Component {...pageProps} />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
