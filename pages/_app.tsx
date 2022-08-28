import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import PointsPreview from "../components/PointsPreview";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.png" />
      </Head>
      <PointsPreview />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
