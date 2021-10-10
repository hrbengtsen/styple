import Head from "next/head";
import { DesignSystemProvider } from "../components/DesignSystemProvider";
import { globalStyles } from "..";

function App({ Component, pageProps }) {
  globalStyles();
  return (
    <DesignSystemProvider>
      <Head>
        <title>styple design system</title>
      </Head>
      <Component {...pageProps} />
    </DesignSystemProvider>
  );
}

export default App;
