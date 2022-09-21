import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import { MDXProvider } from '@mdx-js/react'
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import PointsPreview from "../components/PointsPreview";
import NextNProgress from "nextjs-progressbar";
import CookiesNotice from "../components/CookiesNotice";

const ResponsiveImage = (props: any) => <Image alt={props.alt} layout="responsive" {...props} />

const components = {
  img: ResponsiveImage,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <ThemeProvider>
        <NextNProgress
          options={{ showSpinner: false }} />
        <PointsPreview />
        <CookiesNotice />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </MDXProvider>
  );
}

export default MyApp;
