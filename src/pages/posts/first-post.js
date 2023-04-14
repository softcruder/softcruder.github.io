import Button from "@/components/Buttons/Button.jsx";
import Header from "@/components/Header.jsx";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const FirstPost = () => {

  return (
    <>
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
