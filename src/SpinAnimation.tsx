import React from "react";

const SpinAnimation = () => {
  return (
    <div className="p-16">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="spin"
          cx="100"
          cy="100"
          fill="none"
          r="45"
          stroke-width="12"
          stroke="#161616"
          stroke-dasharray="222.25 1400"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default SpinAnimation;
