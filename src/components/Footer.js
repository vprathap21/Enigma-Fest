import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-neutral-200  mt-auto rounded-sm text-center dark:bg-neutral-500 lg:text-left">
      <div className="p-4 text-center text-neutral-500 dark:text-neutral-200">
        <div className="flex justify-center">
          <div className="flex items-center">
            <p className="text-lg">Made With </p>

            <FaHeart className="text-red-500 ml-2" />
          </div>
          <div className="ml-2 text-lg"> © 2023 Copyright</div>
          <a href="https://github.com/vprathap21/enigma-fest">
            <FaGithub className="glow text-3xl ml-4 hover:text-yellow-300 rounded-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
