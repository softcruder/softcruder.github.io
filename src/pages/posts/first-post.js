import Button from "@/components/Buttons/Button.jsx";
import ArrowButton from "@/components/Buttons/ArrowButton";
import Header from "@/components/Header.jsx";
import Contact from "@/components/Contact";

const FirstPost = () => {
  return (
    <>
    <Header />
      <h1>See First Post</h1>
      <Button text="Click me" href="https://softcruder.github.io" />
    <ArrowButton text="right button" href="https://softcruder.github.io" direction="right" />
    <ArrowButton text="left button" href="https://softcruder.github.io" direction="left" />
    <Contact />
    </>
  );
};
export default FirstPost;
