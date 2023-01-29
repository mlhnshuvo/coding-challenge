import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-700 py-5 text-white">
      <div className="w-11/12 sm:w-6/12 m-auto flex flex-wrap justify-between items-center">
        <p className="text-xl cursor-pointer">Logo</p>
        <ul className="flex justify-end gap-10 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mydata">My Data</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
