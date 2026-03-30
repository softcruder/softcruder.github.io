import { useEffect, useState } from "react";
import MainLoader from "@/components/v2/layout/MainPageLoader";
import Navbar from "@/components/v2/layout/Navbar";
import HomeHero from "@/components/v2/home/HomeHero";
import { introData, meta } from "@/components/content-option";
import { PageSeo } from "@/components/v2/seo/PageSeo";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Hide loader after intro sequence (dots → title → line → icon) plus short buffer.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <PageSeo title="Nasirullah Oladipo" description={meta.notDescription} />
      {loading ? <MainLoader /> : null}
      <Navbar isSticky={true} isTransparent={true} />
      <HomeHero
        title={introData.title}
        subtitle={introData.subtitle}
        intro={introData.notWorkingDescription}
      />
    </div>
  );
}
