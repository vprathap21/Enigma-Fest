import React from "react";

const Landmark = ({ style }) => {
  return (
    <div>
      <button
        className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full animate-pulse"
        style={style.style}
      >
        {style.id}
      </button>
    </div>
  );
};

export default Landmark;
