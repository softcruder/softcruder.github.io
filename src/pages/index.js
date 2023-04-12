import { useState, useEffect } from "react";
import MainLoader from "@/components/MainPageLoader";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

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
      <h1>Welcome to my portfolio!</h1>
      <Footer />
    </>
  );
}
