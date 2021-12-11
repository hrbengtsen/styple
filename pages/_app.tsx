import Head from "next/head";
import {
  globalStyles,
  darkTheme,
  cozyTheme,
  deepTheme,
} from "../stitches.config";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { DesignSystemProvider } from "..";

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <DesignSystemProvider>
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
        <Component {...pageProps} />
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
