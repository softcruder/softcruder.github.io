import React from "react";
import { dataAbout } from "@/components/content-option";

const AboutStory = () => {
  return (
    <section>
      <div className="section-container">
        <div className="container">
          <h2 className="title">{dataAbout.title}</h2>
          <p className="paragraph">{dataAbout.aboutme}
          </p>
        </div>
      </div>
      <style jsx>{`
        .section-container {
          padding: 5% 10%;
          background-color: inherit;
        }

        .container {
          margin: 0 auto;
        }

        .title {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 4vw;
            line-height: 5vw;
            font-weight: 500;
            color: var(--secondary-color);
        }

        .paragraph {
            width: 100%;
            margin-top: 5.5%;
            margin-bottom: 0;
            font-family: Questrial,sans-serif;
            font-weight: 400;
            letter-spacing: .6px;
            -webkit-column-count: 2;
            column-count: 2;
            -webkit-column-gap: 5.5%;
            column-gap: 5.5%;
        }

        p {
          font-size: 1rem;
          line-height: 22px;
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </section>
  );
};

export default AboutStory;
