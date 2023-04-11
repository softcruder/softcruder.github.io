import { useState, useEffect } from "react";
import MainLoader from "@/components/MainPageLoader";

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
      <h1>Welcome to my portfolio!</h1>
    </>
  );
}
