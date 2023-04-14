import Button from "@/components/Buttons/Button.jsx";
import Header from "@/components/Header.jsx";
import Contact from "@/components/Contact";
import { dataAbout } from "@/components/content-option";
import MainLoader from "@/components/MainPageLoader";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const FirstPost = () => {

  return (
    <>
    <MainLoader />
    <Header />
      {/* <p>{dataAbout.aboutme}</p> */}
      <Button text="Click me" href="https://softcruder.github.io" />
    {/* <ArrowButton text="right button" href="https://softcruder.github.io" direction="right" />
    <ArrowButton text="left button" href="https://softcruder.github.io" direction="left" /> */}
    <Layout title="Contact" component={<Contact />} />
    {/* <Contact /> */}
    <Footer />
    </>
  );
};
export default FirstPost;
