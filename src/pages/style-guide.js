import React from "react";
import Head from "next/head";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Buttons/Button";

const StyleGuide = () => {
  return (
    <>
      <Head>
        <title> Style Guide | Softcruder </title>
        <meta
          name="description"
          content="To implement the styles used on this website you can follow the guide for styling on this page."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isSticky={true} isTransparent={true} />
      <section className="style-guide">
        <span className="big-title">Style Guide</span>
        <div className="style-guide__container">
          <div className="style-guide__container__card">
            <Image
              src="/images/no-file.svg"
              alt="No content yet"
              width={64}
              height={64}
            />
            <br />
            <p>
              No Content here yet! <br /> Still compiling style guide.
            </p>
          </div>
          <Button text="Home" href="/" target="_self" />
        </div>
      </section>
      <Footer />
      <style jsx>{`
        section {
          margin-top: 100px;
          z-index: -1;
        }

        span {
          margin-top: 40px;
          padding-top: 40px;
          text-align: center;
        }

        span.big-title {
          font-size: 3rem;
          font-weight: 500;
        }
        .style-guide {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 10%;
        }
        .style-guide__container {
          display: flex;
          flex-direction: column;
          margin: 5% 10% 6% 10%;
        }
        .style-guide__container__card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }
        @media screen and (max-width: 767px) {
          .big-title {
            font-size: 24px;
            line-height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default StyleGuide;
