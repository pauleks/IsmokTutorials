import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from '@mdx-js/react'
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import PointsPreview from "../components/PointsPreview";

const ResponsiveImage = (props: any) => <Image alt={props.alt} layout="responsive" {...props} />

const components = {
  img: ResponsiveImage,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider>
        <Head>
          <link rel="icon" type="image/x-icon" href="favicon.png" />
        </Head>
        <PointsPreview />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
