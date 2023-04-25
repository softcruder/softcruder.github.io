import * as React from "react";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import ArrowButton from "@components/Buttons/ArrowButton";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl"

const HomeLayout = ({ title, subtitle, intro }) => {
    return (
      <section className="home-layout">
        <div className="split">
          <div className="content-container">
            <span className="big-title">{title}</span>
            <h2>{subtitle}</h2>
            <p>{intro}</p>
            <div className="button-container">
              <Button text="Projects" href="/projects" target="_self" />
              <ArrowButton text="About Me" href="/about" direction="right" />
            </div>
            <div className="social-icons">
                <span className="social-text">FOLLOW ME</span>
                <br />
              <Link href="https://twitter.com/NasirOladipo" target="_blank">
                <span className="twitter">{<SlSocialTwitter />}</span>
              </Link>
              <Link href="https://github.com/softcruder" target="_blank">
                <span className="github">{<FaGithub />}</span>
              </Link>
              <Link href="https://linkedin.com/nasirullah-oladipo" target="_blank">
                <span className="linkedin">{<FaLinkedin />}</span>
              </Link>
              <Link href="https://softcruder.hashnode.com/" target="_blank">
                <span className="hashnode">{<SiHashnode />}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mobile-footer">
              <div className="social-icons-mobile">
                  <span className="social-text">FOLLOW ME</span>
                  <br />
                <Link href="https://twitter.com/NasirOladipo" target="_blank">
                  <span className="twitter">{<SlSocialTwitter />}</span>
                </Link>
                <Link href="https://github.com/softcruder" target="_blank">
                  <span className="github">{<FaGithub />}</span>
                </Link>
                <Link href="https://linkedin.com/nasirullah-oladipo" target="_blank">
                  <span className="linkedin">{<FaLinkedin />}</span>
                </Link>
                <Link href="https://softcruder.hashnode.com/" target="_blank">
                  <span className="hashnode">{<SiHashnode />}</span>
                </Link>
              </div>
              <div className="mob-footer-btn">
              <ArrowButton text="contact Me" target="_self" href="/contact" direction="right" />
              </div>
            </div>
  
        <style jsx>{`
          .home-layout {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: "Questrial", sans-serif;
          }
  
          .split {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          }
  
          .content-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0 14%;
          }
  
          .big-title {
            font-size: 8vw;
            line-height: 9vw;
            font-weight: bold;
            margin-bottom: 2rem;
            font-family: "DM Sans", sans-serif;
          }

          h2 {
            font-size: 1.4rem;
            line-height: 2.5rem;
            letter-spacing: .5px;
            text-transform: capitalize;
            font-weight: 400;
            order: -1;
          }

          p {
            margin-bottom: 3rem;
          }

          span, h2 , p {
            text-align: left;
          }
  
          .button-container {
            display: flex;
            gap: 1rem;
          }
  
          .social-icons {
            position: absolute;
            bottom: 0;
            left: 1rem;
          }

          .mobile-footer {
            display: none;
          }
  
          .social-icons span {
            margin-right: 1rem;
            cursor: pointer;
          }
  
          .social-icons span:hover {
            opacity: 0.8;
          }

          span.social-text {
            writing-mode: sideways-lr;
          }
          @media screen and (max-width: 991px) {
            section {
                background-image: url(/images/home-profile.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                color: var(--primary-color);
              }

            .content-container {
                max-width: 85vw;
            }
            .button-container {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              margin-top: 2rem;
              margin-bottom: 1.3rem;
            }

            .mobile-footer {
              display-none;
            }
          }
          @media screen and (max-width: 767px) {
            section {
              background-image: none;
              background-color: var(--black-bg-color);
              color: var(--secondary-color);
            }
            p {
            color: var(--secondary-color) !important;
            }
            split {
              max-height: 350px;
              overflow: none;
            }
            h2, p {
              font-size: 2.5vw;
              line-height: 3.5vw;
              letter-spacing: .2px;
            }
            .content-container {
              width: 100%;
              padding: 0 32px 0 32px;
              margin-top: 35%;
            }
            .big-title {
              margin-bottom: 1rem;
            }
            .button-container {
              margin-top: 1rem;
              margin-bottom: .65rem;
              flex-direction: column-reverse;
            }
            .social-icons {
              display: none;
            }
            
            .mobile-footer {
              position: absolute;
              bottom: 0;
              padding-left: 1rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              // gap: 1rem;
            }

            .social-icons-mobile {
              justify-content: flex-start;
              left: 0;
            }
    
            .social-icons-mobile span {
              margin-right: .5rem;
              cursor: pointer;
              padding-bottom: .5rem;
            }

            span.social-text {
              display: none;
            }
          }
          
        `}</style>
      </section>
    );
  };
  
  export default HomeLayout;  
