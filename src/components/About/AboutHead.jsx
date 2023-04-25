import React from "react";

const AboutHeader = () => {
  return (
    <div>
      <div className="header-container">
        <div className="overlay"></div>
        <h1 className="title">About Me</h1>
      </div>
      <style jsx>{`
        .header-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 90vh;
          background-image: url('/images/about-head.jpg');
          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .title {
          position: absolute;
          font-size: 5rem;
          font-weight: bold;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default AboutHeader;
