import React from "react";
import { NavLink } from "react-router";

function NavBar() {
  const styleNav =
    "px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full border border-transparent text-gray-500 hover:text-purple-600 hover:bg-purple-50";
  return (
    <div className="flex justify-center items-center mt-5 bg-black h-15">
      <NavLink className={styleNav} to="/">
        HOME
      </NavLink>
      <NavLink className={styleNav} to="register">
        REGISTER
      </NavLink>
      <NavLink className={styleNav} to="post">
        POST
      </NavLink>
    </div>
  );
}

export default NavBar;
