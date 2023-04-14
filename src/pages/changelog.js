import React, { useState, useEffect } from "react";
import LogCard from "@/components/LogCard";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

const Changelog = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch("/api/changelog")
      .then((res) => res.json())
      .then((data) => setCommits(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar isSticky={true} isTransparent={true} />
      <section className="changelog">
        <span className="big-title">Changelog</span>
        {commits &&
          commits.map((commit) => (
            <LogCard
              key={commit.sha}
              date={new Date(commit.commit.author.date).toLocaleDateString()}
              message={commit.commit.message}
            />
          ))}

        <Footer />
      </section>
      <style jsx>{`
      section{
        margin-top: 150px;
        z-index: -1;
      }
        span.big-title {
          display: block;
          position: relative;
          text-align: center;
        }
        .big-title{
          font-size: 3rem;
        }
      `}</style>
    </>
  );
};

export default Changelog;
