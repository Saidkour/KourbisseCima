import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SEARCH, SET_SEARCH_VAL, TOOGLE_DARK } from "../redux/actionTypes";
import SelectGenre from "./SelectGenre";

const Nav = () => {
  const searchVal = useSelector((state) => state.searchVal);
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  return (
    <nav className="">
      <div className="px-4 mx-auto flex flex-col justify-between items-center py-4 shadow-md md:flex-row">
        <div>
          <a href="/">
            <h2 className="text-2xl text-indigo-600  font-bold">Movie App</h2>
          </a>
        </div>
        <div className="mt-4 md:mt-0 md:mr-9">
          <label className={`input input-bordered flex items-center gap-2 max-w-[350px] m-auto font-medium ${!dark?"bg-gray-200 text-black":""}`}>
            <input
              type="text"
              value={searchVal}
              onChange={(e) =>
                dispatch({
                  type: SET_SEARCH_VAL,
                  payload: e.currentTarget.value,
                })
              }
              className="border-none "
              placeholder="Search a movie"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#000000"
              onClick={() => dispatch({ type: SET_SEARCH, payload: searchVal })}
              className="w-5 h-5 opacity-70 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                className="w-[20px] h-[20px]"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            {searchVal != "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => dispatch({ type: SET_SEARCH_VAL, payload: "" })}
                className="w-[20px] h-[20px] cursor-pointer hover:rotate duration-200 transition-all  ease-in-out"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            ) : (
              ""
            )}
          </label>
        </div>
        <div className="mt-4 md:mt-0">
          <SelectGenre/>
        </div>
        <div className="mt-4 md:mt-0">
          <span>
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4F46E5"
                className="size-6 cursor-pointer hover:rotate-360 duration-200 transition-all  ease-in-out"
                onClick={()=>dispatch({type:TOOGLE_DARK})}
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
                onClick={()=>dispatch({type:TOOGLE_DARK})}
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
