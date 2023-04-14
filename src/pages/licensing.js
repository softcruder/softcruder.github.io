import LicenseCard from "@/components/LicenseCard";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

function LicensingPage() {
  return (
    <>
    <Navbar isSticky={true} transparent={false} />
    <div className="licensing">
      <span className="big-title">Licensing</span>
      <LicenseCard heading="Disclaimer" messageParts={[ { text: "All images used in this portfolio are not for personal and commercial purposes except for as used by the ", linkUrl: "https://softcruder.me", linkText: "author" }, { text: ". You have to change all the images if you are replicating this template. Please be careful when using other images from the internet. They can be copyright protected, which can lead to issues with the copyright owner and can even lead to big fines. Any business with the same name is entirely intentional. For copyright issues, please contact me directly at ", linkUrl: "mailto:softcruder@gmail.com", linkText: "softcruder's mail" },
    { text: " or through the form on the ", linkUrl: "/contact", linkText: "contact" }, {text: " page."} ]} />

      <LicenseCard heading="Icons and Project Images" messageParts={[ { text: "All the icons used here are from the React Icons Library or SVGs I (the Author) created myself. Project Images are screenshot of the respective projects built by the author of this portfolio."}, ]} />
    </div>
    <Footer />
    <style jsx>{`
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
    `}</style>
    </>
  )
  };

  export default LicensingPage;