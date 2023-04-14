import LicenseCard from "@/components/LicenseCard";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

function LicensingPage() {
  return (
    <>
    <Navbar isSticky={true} transparent={false} />
    <div className="licensing">
      <span className="big-title">Licensing</span>
      <LicenseCard heading="Disclaimer" message="All images used in this portfolio are not for personal and commercial purposes except for as used by the author. You have to change all the images if you are replicating this template. Please be careful when using other images from the internet. They can be copyright protected, which can lead to issues with the copyright owner and can even lead to big fines. Any business with the same name is entirely intentional. For copyright issues, please contact me directly at softcruder@gmail.com" />

      <LicenseCard heading="Icons and Project Images" message="All the icons used here are from the React Icons Library or SVGs I (the Author) created myself. Project Images are screenshot of the respective projects built by the author of this porfolio." />
    </div>
    <Footer />
    <style jsx>{`
    span.big-title {
        display: block;
        position: relative;
        margin-top: 76px;
        text-align: center;
    }
    `}</style>
    </>
  )
  };

  export default LicensingPage;