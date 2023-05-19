import { useState, useEffect } from "react";
import MainLoader from "@/components/MainPageLoader";
import Navbar from "@/components/Header";
import HomeLayout from "@/components/Home/HomeComponent";
import { meta, introData } from "@/components/content-option";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Head>
        <title> Nasirullah Oladipo | Frontend Developer </title>
        <meta
          name="description"
          content={meta.notDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <MainLoader /> : null}
      <Navbar isSticky={true} isTransparent={true} />
      <HomeLayout title={introData.title} subtitle={introData.subtitle} intro={introData.workingDescription} />
      <style jsx>{`
        @media screen and (max-width: 991px) {
          header {
            background-color: var(--primary-color) !important;
          }
        }
      `}</style>
    </>
  );
}
