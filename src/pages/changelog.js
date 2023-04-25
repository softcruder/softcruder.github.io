import React, { useState, useEffect } from "react";
import Head from "next/head";
import LogCard from "@/components/LogCard";
import Navbar from "@/components/Header";
import Button from "@/components/Buttons/Button"
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const Changelog = () => {
  const [commits, setCommits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/softcruder/softcruder.github.io/commits")
      .then((res) => res.json())
      .then((data) => setCommits(data))
      .catch((err) => setError(err));
  }, []);

  if (error !== null) {
    return (
      <>
      <Navbar />
      <div className="error-message">
        <p>{error.message}</p>
        <p>Use the button below to send me the error message you are getting.</p>
        <Button text="Send The Message" href="/contact" target="_self" />
      </div>
      <Footer isSticky={true} />
      </>
    );
  }
  console.log(commits.data);
  return (
    <>
    <Head>
    <title> Changelog | Softcruder </title>
    <meta
      name="description"
      content="See the changes to the repository of this website so far."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      <Navbar isSticky={true} isTransparent={true} />
      <section className="changelog">
        <span className="big-title">Changelog</span>
        {commits.length > 0 ? (
        commits.map((commit) => (
          <LogCard
            key={commit.sha}
            date={new Date(commit.commit.author.date).toLocaleDateString()}
            author={commit.commit.author.name}
            message={commit.commit.message}
          />
        ))
      ) : (
        <>
        <Preloader />
        <p>Loading commits...</p>
        </>
      )}
        <Footer />
      </section>
      <style jsx>{`
      section{
        margin-top: 100px;
        z-index: -1;
      }

      span {
        margin-top: 40px;
        padding-top: 40px;
        padding-bottom: 20px;
        text-align: center;
        display: block;
      }
        
      .big-title{
          font-size: 3rem;
          text-align: center;
      }
      .error-message {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      `}</style>
    </>
  );
};

export default Changelog;
