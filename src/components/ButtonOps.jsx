import React from 'react';
const BtnLoader = () => {
    return (
      <div className="animated-svg">
        <svg width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#5a58ff", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#3c3cf3", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="36" cy="50" fill="#d4d4d4" r="14">
            <animate attributeName="cx" repeatCount="indefinite" dur="0.9900990099009901s" keyTimes="0;0.5;1" values="36;64;36" begin="-0.49504950495049505s"></animate>
          </circle>
          <circle cx="64" cy="50" fill="#ffffff" r="14">
            <animate attributeName="cx" repeatCount="indefinite" dur="0.9900990099009901s" keyTimes="0;0.5;1" values="36;64;36" begin="0s"></animate>
          </circle>
          <circle cx="36" cy="50" fill="#d4d4d4" r="14">
            <animate attributeName="cx" repeatCount="indefinite" dur="0.9900990099009901s" keyTimes="0;0.5;1" values="36;64;36" begin="-0.49504950495049505s"></animate>
            <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="0.9900990099009901s" repeatCount="indefinite"></animate>
          </circle>
        </svg>
      </div>
    );
  };  

export default BtnLoader;