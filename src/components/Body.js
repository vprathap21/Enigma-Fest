import React, { useState } from "react";
import { MAP } from "../utils/links";
import Landmark from "./Landmark";
import { FaLandmark } from "react-icons/fa";
import GlowLandmark from "./GlowLandmark";
import { gloweffect } from "../utils/constants";
import { test } from "../utils/constants";

const Body = () => {
 
  const [glow, setGlow] = useState([test[0]]);
  const [showIndex, setShowIndex] = useState(null);
 
  return (
    <body className="flex flex-col min-h-screen">
      <div className="relative">
        <img className="w-11/12 object-cover" src={MAP} alt=""></img>

        <FaLandmark
          className="absolute text-5xl text-purple-600"
          style={{ top: "50%", left: "18%" }}
        />

        {test.map((item, index) => {
          return (
            <Landmark style={item} key={index} className="animate-pulse" />
          );
        })}

        {glow.map((item, index) => {
          return (
            <GlowLandmark
              style={{ ...item?.style, ...gloweffect }}
              item={item}
              key={index}
              show={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
              setGlow={() => setGlow(item?.connected)}
              className={showIndex === index ? "fade-in" : ""}
            />
          );
        })}
      </div>
    </body>
  );
};
export default Body;
