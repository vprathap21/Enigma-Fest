import React, { useState } from "react";
import { logo } from "../utils/links";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector((state) => state.user);
  const [user, setUser] = useState(true);

  const onClickHandler = () => {
    setUser(!user);
  };

  return (
    <div className="bg-white text-purple-500 shadow-lg m-4 flex justify-between items-center">
      <img className="ml-4" src={logo} alt="logo" />
      <p className="text-purple-500  animate-bounce">" Code and Decode with Fun! "</p>
      <button
        onClick={onClickHandler}
        className="flex items-center text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
      >
        {user && <p className="text-xl mr-2">{currentUser.TeamName}</p>}
        <FaUserCircle className="text-4xl" />
      </button>
      
    </div>
  );
};

export default Header;
