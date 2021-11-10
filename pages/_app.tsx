import Head from "next/head";
import { DesignSystemProvider } from "../components/DesignSystemProvider";
import { globalStyles, darkTheme } from "../stitches.config";
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
        value={{ light: "light-theme", dark: darkTheme.className }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
