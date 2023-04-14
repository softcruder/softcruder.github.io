import React from "react";

const LogCard = ({ date, message }) => {
  return (
    <div className="card">
      <h3 className="card-date">{date}</h3>
      <div className="card-content">
      <div className="card-message">{message}</div>
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
        margin: 11% 10%;
      }

      h3 {
        font-weight: 400;
        padding: 20px;
        text-transform: capitalize;
        font-size: 1rem;
      }

      .card-date {
        width: 100%;
        text-align: center;
      }
      
      .card-content {
        padding: 4rem;
        text-align: center;
        width: 100%;
        border-top: 1px solid #464646;
      }      
      `}</style>
    </div>
  );
};

export default LogCard;
