import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  RESET_STATE, TOOGLE_DARK } from "../redux/actionTypes";

import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const location = useLocation();
  const isGenrePage = location.pathname === "/genre";
  return (
    <nav className="">
      <div className="px-4 mx-auto flex justify-between items-center py-4 shadow-md ">
        <div>
          <Link to="/">
            <h2 onClick={()=>dispatch({type:RESET_STATE})} className="text-2xl text-indigo-600  font-bold">Movie App</h2>
          </Link>
        </div>
         <div className="hidden sm:block ">
         {!isGenrePage && <Search />}
         </div>
        <div>
          <div className="sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to={"/"}
                className={`rounded-md  px-3 py-2 text-sm font-medium ${
                  dark
                    ? "text-gray-300 hover:bg-gray-900"
                    : "text-gray-900 hover:bg-gray-300"
                }`}
              >
                Home
              </Link>
              <Link
                to={"/genre"}
                className={`rounded-md  px-3 py-2 text-sm font-medium ${
                  dark
                    ? "text-gray-300 hover:bg-gray-900"
                    : "text-gray-900 hover:bg-gray-300"
                }`}
              >
                Genre
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <span>
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4F46E5"
                className="size-6 cursor-pointer hover:rotate-360 duration-200 transition-all  ease-in-out"
                onClick={() => dispatch({ type: TOOGLE_DARK })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4F46E5"
                className="size-6 cursor-pointer hover:rotate-180 duration-200 transition-all  ease-in-out"
                onClick={() => dispatch({ type: TOOGLE_DARK })}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
