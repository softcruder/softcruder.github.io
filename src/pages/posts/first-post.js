import Button from "@/components/Buttons/Button.jsx";
import ArrowButton from "@/components/Buttons/ArrowButton";
import Header from "@/components/Header.jsx";
import Contact from "@/components/Contact";
import { dataAbout } from "@/components/content-option";
import MainLoader from "@/components/MainPageLoader";
import Footer from "@/components/Footer";

const FirstPost = () => {

  return (
    <>
    <MainLoader />
    <Header />
      <h1>See First Post</h1>
      {/* <p>{dataAbout.aboutme}</p> */}
      <Button text="Click me" href="https://softcruder.github.io" />
    <ArrowButton text="right button" href="https://softcruder.github.io" direction="right" />
    <ArrowButton text="left button" href="https://softcruder.github.io" direction="left" />
    <Contact />
    <Footer />
    </>
  );
};
export default FirstPost;
