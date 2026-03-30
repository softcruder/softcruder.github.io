import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";
import { AboutSkill } from "@/components/About/AboutSkill";
import { PageSeo } from "@/components/v2/seo/PageSeo";

export default function Test() {
  return (
    <>
      <PageSeo title="Test" noIndex />
      <Navbar />
      <AboutSkill title="My Skills" />
      <Footer />
    </>
  );
}
