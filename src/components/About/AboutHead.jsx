import React from "react";


const AboutHeader = () => {
  return (
    <section className="about-header">
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

        .dark-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }        

        .title {
          position: absolute;
          font-size: 5rem;
          font-weight: bold;
          color: white;
        }
        @media screen and (max-width: 479px){
          .title {
            font-size: 12vw;
            line-height: 13vw;
        }
          
        @media screen and (max-width: 767px) {
          .title {
            font-size: 60px;
            line-height: 66px;
          }
        }
        
        @media screen and (max-width: 991px) {
          .title {
            margin-bottom: 16px;
            font-size: 72px;
            line-height: 78px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHeader;
