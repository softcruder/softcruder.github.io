import Head from "next/head";
import LicenseCard from "@/components/LicenseCard";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

function LicensingPage() {
  return (
    <>
    <Head>
        <title> Licensing | Softcruder</title>
        <meta
          name="description"
          content="Guidelines on license to implement the layout of this website as a project or for your portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar isSticky={true} transparent={false} />
    <section className="licensing">
      <span className="big-title">Licensing</span>
      <LicenseCard heading="Disclaimer" messageParts={[ { text: "All images used in this portfolio are not for personal and commercial purposes except for as used by the ", linkUrl: "https://softcruder.me", linkText: "author" }, { text: ". You have to change all the images if you are replicating this template. Please be careful when using other images from the internet. They can be copyright protected, which can lead to issues with the copyright owner and can even lead to big fines. Any business with the same name is intentional. For copyright issues, please contact me directly at ", linkUrl: "mailto:softcruder@gmail.com", linkText: "softcruder's mail" },
    { text: " or through the form on the ", linkUrl: "/contact", linkText: "contact" }, {text: " page."} ]} />

      <LicenseCard heading="Template and Design" messageParts={[ { text: "The template and design implemented here is inspired by ", linkUrl: "https://alex-grant-template.webflow.io", linkText: "Alex Grant" }, { text: " webflow template, from the ", linkUrl: "https://www.lightninglab.design", linkText: " design studio." },
    { text: " It was built with no-code tool ", linkUrl: "https://webflow.com", linkText: "webflow" }, {text: ", while i wrote the code for this with JavaScript using the React framework and NextJS."} ]} />

      <LicenseCard heading="Icons and Project Images" messageParts={[ { text: "All the icons used here are from the React Icons Library or SVGs I (the Author) created myself. Project Images are screenshot of the respective projects built by the author of this portfolio."}, ]} />

    </section>
    <Footer />
    <style jsx>{`
    section{
      margin-top: 100px;
      z-index: -1;
    }
    
    span.big-title {
        display: block;
        position: relative;
        margin-top: 10%;
        text-align: center;
    }
    .big-title{
        font-size: 3rem;
        font-weight: 500;
    }
    @media (max-width: 767px) {
      .big-title {
        font-size: 48px;
        line-height: 54px;
        margin-top: 15%;
        margin-bottom: 50px;
      }
    }
    `}</style>
    </>
  )
  };

  export default LicensingPage;