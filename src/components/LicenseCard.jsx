import React from "react";

const LicenseCard = ({ heading, messageParts }) => {
  return (
    <section className="card">
      <h1 className="card-heading">{heading}</h1>
      <div className="card-content">
        <div className="card-message">
        {Array.isArray(messageParts) && messageParts.map((part, index) =>  {
            return (
              <React.Fragment key={index}>
                {part.text}
                {part.linkUrl && (
                  <a className={"alt-link"} href={part.linkUrl}>{part.linkText || part.text}</a>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: var(--primary-color);
          border: 1px solid #464646;
          border-radius: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          flex-direction: column;
          margin: 5% 10% 6% 10%;
        }

        h1 {
          font-weight: 400;
          padding: 20px;
          text-transform: capitalize;
          font-size: 2rem;
        }

        a.alt-link {
          text-transform: lowercase;
          text-decoration: underline;
          color: #dbdbdb;
          font-weight: bold;
        }

        .card-heading {
          width: 100%;
          text-align: center;
        }

        .card-content {
          padding: 4rem;
          text-align: left;
          border-top: 1px solid #464646;
        }
      `}</style>
    </section>
  );
};

export default LicenseCard;
