import Head from "next/head";
import React from "react";
import Image from "next/image";
import Button from "@/components/Buttons/Button";

const NotFound = () => {
  return (
    <>
      <Head>
        <title> Page Not Found | Nasirullah Oladipo </title>
        <meta
          name="description"
          content="The page does not exist on this website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className="utility-container">
        <div className="utility-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="0 0 15 19"
            className="utility-icons"
          >
            <g id="no-file" transform="translate(-421.5 55.5)">
              <g id="file" transform="translate(417 -58)">
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M13,3l6,6V21H5V3Z"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=".75"
                />
              </g>
              <g id="Group_12" data-name="Group 12" transform="translate(0 -1)">
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M12,8v5"
                  transform="translate(417 -57)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
                <line
                  id="Line_14"
                  data-name="Line 14"
                  transform="translate(429 -41)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                />
              </g>
            </g>
          </svg>

          <h1 className="utility-title">Page Not Found</h1>
          <p className="muted-text">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Button href="/" text="Go Back Home" target="_self" />
        </div>
        <style jsx>{`
          .utility-container {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2;
            margin: 3% 10%;
          }

          .utility-content {
            display: flex;
            max-width: 60vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100vh;
            padding: 2rem;
          }

          .utility-icons {
            height: 74px;
          }

          .utility-title {
            margin-top: 2rem;
            font-family: "Questrial", sans-serif;
            font-weight: 400;
            text-transform: uppercase;
          }

          h1 .utility-title {
            margin-bottom: 10px;
          }
          h1{
            font-size: 3rem;
            font-height: 3.5rem;
          }

          .muted-text {
            display: inline-block;
            font-family: "Questrial", sans-serif;
            color: #888;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: 0.4px;
            text-decoration: none;
            text-transform: uppercase;
          }
        `}</style>
      </div>
    </>
  );
};

export default NotFound;
