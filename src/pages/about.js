import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import AboutHeader from "@/components/About/AboutHead";
import AboutSkill from "@/components/About/AboutSkill";
import AboutStory from "@/components/About/AboutStory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import ArrowButton from "@/components/Buttons/ArrowButton";
import Button from "@/components/Buttons/Button";

const About = () => {
    const aboutRef = useRef(null);
  const overlayRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    const about = aboutRef.current;
    const overlay = overlayRef.current;
    const story = storyRef.current;

    const tl = gsap.timeline();

    tl.to(about, {
      duration: 0,
      visibility: 'visible',
      opacity: 1,
    })
      .to(overlay, {
        duration: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        ease: 'power4.out',
      })
      .to(overlay, {
        duration: 0.5,
        opacity: 0,
        ease: 'power4.out',
      })
      .to(story, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power4.out',
      });
  }, []);
    return (
        <>
        <Head>
        <title> About Me | Softcruder </title>
        <meta name="description" content="What would you like to know more about me."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <Navbar isSticky={true} isTransparent={true} />
            <div ref={aboutRef} className="about-header">
                <AboutHeader />
            </div>
            <div ref={overlayRef} className="overlay" />
            <div ref={storyRef} className="about-story">
                <AboutStory />
            </div>
            <AboutSkill title="My Skills"/>
            <div className="some-buttons">
            <Button text="HOME" href="/" target="_self" />
            <ArrowButton text="PROJECTS" direction="right"href="/projects" target="_self" />
            </div>
            <Footer />
            <style jsx>{`
            .about-header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: 1;
                visibility: hidden;
                opacity: 0;
              }
      
              .overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0);
                z-index: 2;
                opacity: 1;
              }
      
              .about-story {
                position: relative;
                z-index: 3;
                transform: translateY(100%);
                opacity: 0;
              }
              
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