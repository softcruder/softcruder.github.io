import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Changelog = ({ commits }) => {
  return (
    <div className="changelog">
      <span className="big-title">Changelog</span>
      {commits.map((commit) => (
        <Card
          key={commit.sha}
          date={new Date(commit.commit.author.date).toLocaleDateString()}
          message={commit.commit.message}
        />
      ))}
    </div>
  );
};

export default Changelog;
