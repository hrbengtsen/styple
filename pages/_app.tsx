import Head from "next/head";
import { DesignSystemProvider } from "../components/DesignSystemProvider";
import {
  globalStyles,
  darkTheme,
  cozyTheme,
  deepTheme,
} from "../stitches.config";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
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
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
