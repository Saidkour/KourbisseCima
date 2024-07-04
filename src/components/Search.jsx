import React from "react";
import { SET_SEARCH, SET_SEARCH_VAL } from "../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";
function Search() {
  const searchVal = useSelector((state) => state.searchVal);
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  return (
    <div className="mt-4 md:mt-0 md:mr-9">
      <label
        className={`input input-bordered flex items-center sm:gap-2 max-w-[270px] sm:max-w-[350px] m-auto font-medium ${
          !dark ? "bg-gray-200 text-black" : ""
        }`}
      >
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
  );
}

export default Search;
