import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { useState, useEffect } from "react";
import Preloader from "@/components/PreLoader";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={theme}>
      {loading ? <Preloader /> : null}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
