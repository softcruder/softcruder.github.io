import AboutHeader from "@/components/About/AboutHead";
import AboutStory from "@/components/About/AboutStory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import React from "react";

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHeader />
            <AboutStory />
            <Footer />
        </>
    );
}

export default About;