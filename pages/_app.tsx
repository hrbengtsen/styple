import "../styles/globals.css";
import Head from "next/head";
import { DesignSystemProvider } from "../components/DesignSystemProvider";

function App({ Component, pageProps }) {
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
