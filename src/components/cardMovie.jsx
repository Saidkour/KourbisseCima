import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardMovie = ({ item }) => {
  const dark = useSelector((state) => state.dark);
  return (
    <div
      className={`${
        item.poster_path ? "" : "hidden"
      } hover:opacity-[0.9] text-center sm:hover:scale-105 ease-in-out overflow-hidden rounded-xl shadow-md transition-shadow`}
    >
      <div className="relative sm:max-w-[300px] h-auto">
        <span className="absolute text-white top-2 right-2 bg-yellow-400 p-1 rounded-xl">
          {item.vote_average.toFixed(1)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </span>
        <Link to={`/movie/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          className="w-full h-full sm:w-[280px] hover:opacity-50 sm:h-[340px] cursor-pointer overflow-hidden"
          alt={item.name}
        />
        </Link>
        
        <div className="hidden sm:block group absolute hover:shadow-md hover:scale-110  cursor-pointer shadow-lg w-8 h-8 group-hover:grid  place-content-center rounded-full right-0 left-[125px] bottom-0 top-40 z-50">
        <Link to={`/movie/${item.id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="w-10 h-10  text-white bg-black rounded-full p-2 bg-transparent hover:bg-indigo-600 hover:text-black transition-all duration-300 ease-in-out"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>
        </Link>
      </div>

      </div>
      <span className={`flex justify-evenly ${!dark?"text-black":""} font-semibold my-5`}>
        {item?.name}
        {item?.original_title}{" "}
        <span className="text-yellow-400 ml-10 justify-end">
          {item.first_air_date?.slice(0, 4)}
          {item.release_date?.slice(0, 4)}
        </span>
      </span>
    </div>
  );
};

export default CardMovie;
