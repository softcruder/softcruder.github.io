import { useState, useEffect } from "react";
import MainLoader from "@/components/MainPageLoader";
import Navbar from "@/components/Header";
import HomeLayout from "@/components/Home/HomeComponent";
import { introData } from "@/components/content-option";
import Link from "next/link";

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
      {loading ? <MainLoader /> : null}
      <Navbar isSticky={true} isTransparent={true} />
      <HomeLayout title={introData.title} subtitle={introData.subtitle} intro={introData.notWorkingDescription} />
    </>
  );
}
