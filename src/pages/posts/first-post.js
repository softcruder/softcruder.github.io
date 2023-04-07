import Button from "@/components/Buttons/Button.jsx";
import ArrowButton from "@/components/Buttons/ArrowButton";

const FirstPost = () => {
  return (
    <>
      <h1>See First Post</h1>
      <Button text="Click me!" href="https://softcruder.github.io" />
    <ArrowButton text="Click me!" href="https://softcruder.github.io" direction="right" />
    <ArrowButton text="Click me!" href="https://softcruder.github.io" direction="left" />
    </>
  );
};
export default FirstPost;
