import * as React from "react";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import ArrowButton from "@components/Buttons/ArrowButton";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const HomeLayout = ({ title, subtitle, intro }) => {
  return (
    <section>
    <div class="split-background">
      <div class="image-container">
        <Image
          src="/images/home-profile.jpg"
          width={760}
          height={1024}
          alt="Softcruder"
        />
      </div>
      <div class="content-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{intro}</p>
        <div class="button-container">
          <Button text="Projects" href="/projects" />
          <ArrowButton text="More About Me" href="/about" direction="right" />
        </div>
        <div class="social-icons">
          <Link href="https://twitter.com/NasirOladipo">
            <span className="twitter">{<FaTwitter />}</span>
          </Link>
          <Link href="https://twitter.com/NasirOladipo">
            <span className="github">{<FaGithub />}</span>
          </Link>
          <Link href="https://twitter.com/NasirOladipo">
            <span className="linkedin">{<FaLinkedin />}</span>
          </Link>
        </div>
      </div>
      </div>
      <style jsx>{`
      .split-background {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .image-container {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50%;
        background-size: cover;
        background-position: center;
      }
      
      .content-container {
        width: 50%;
        background-color: #f2f2f2;
        padding: 2rem;
      }
      
      .title {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      
      .subtitle {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      
      .description {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }
      
      .button-container {
        margin-top: 2rem;
        display: flex;
        flex-direction: row;
      }
      
      .social-icons {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        display: flex;
        gap: 1rem;
        }
      
      @media (min-width: 769px) {
        .split-background {
          flex-direction: row;
        }
      
        .content-container {
          height: 100%;
        }
      }
      
        /* Set the background image for smaller screens */
        @media screen and (max-width: 768px) {
          section {
            background-image: url(/images/home-profile.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
          }

          .split-background {
            display: none;
          }
        }

        /* Hide the background image for larger screens */
        @media screen and (min-width: 769px) {
          section {
            background: none;
          }

          .split-background {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .image-container {
            width: 50%;
            height: 100%;
            position: relative;
          }

          .image-container img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .content-container {
            width: 50%;
            padding: 2rem;
            background-color: #ffffff;
          }

          .content-container h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .content-container h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .content-container p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .button-container {
            display: flex;
            gap: 1rem;
          }
          .button-container a {
            display: inline-block;
            background-color: #0070f3;
            color: #ffffff;
            padding: 1rem 2rem;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: bold;
            transition: all 0.3s ease;
          }

          .button-container a:hover {
            background-color: #0a4af4;
          }

          .social-icons {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            display: flex;
            gap: 1rem;
          }

          .social-icons a {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: #0070f3;
            color: #ffffff;
            text-align: center;
            line-height: 2rem;
            text-decoration: none;
            font-size: 1.5rem;
            transition: all 0.3s ease;
          }

          .social-icons a:hover {
            background-color: #0a4af4;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeLayout;
