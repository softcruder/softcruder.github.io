import React from "react";

const LogCard = ({ date, message }) => {
  return (
    <div className="card">
      <div className="card-date">{date}</div>
      <div className="card-message">{message}</div>
      <style jsx>{`
      `}</style>
    </div>
  );
};

export default LogCard;
