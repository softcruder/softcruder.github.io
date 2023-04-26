import Head from "next/head";
import AboutHeader from "@/components/About/AboutHead";
import AboutSkill from "@/components/About/AboutSkill";
import AboutStory from "@/components/About/AboutStory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import React from "react";
import ArrowButton from "@/components/Buttons/ArrowButton";
import Button from "@/components/Buttons/Button";

const About = () => {
    return (
        <>
        <Head>
        <title> About Me | Softcruder </title>
        <meta name="description" content="What would you like to know more about me."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <Navbar isSticky={true} isTransparent={true} />
            <AboutHeader />
            <AboutStory />
            <AboutSkill title="My Skills"/>
            <div className="some-buttons">
            <Button text="HOME" href="/" target="_self" />
            <ArrowButton text="PROJECTS" direction="right"href="/projects" target="_self" />
            </div>
            <Footer />
            <style jsx>{`
            .some-buttons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 3% 10%;
                bottom: 10px;
            }
            `}</style>
        </>
    );
}

export default About;