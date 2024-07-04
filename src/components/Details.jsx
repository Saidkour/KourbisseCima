import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import CardMovie from "./cardMovie";

const Details = () => {
  const dark = useSelector((state) => state.dark);
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === parseInt(id));
  console.log(movie);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movie]);
  return (
    <>
      {movie ? (
        <div>
          <main className="relative  px-6 py-5 lg:px-8">
            <div className={`absolute top-0 left-0 w-full h-full bg-[url("/bg-img.jpg")] opacity-[0.95]  bg-cover bg-center z-[-1]`}></div>
            <div className="absolute bg-black w-full h-full left-0 right-0 bottom-0 opacity-[0.40] bg-cover z-[-1] bg-center top-0"></div>

            <div
              className={`text-center block sm:grid z-10 grid-cols-1 sm:grid-cols-2 rounded-lg p-5`}
            >
              <div className="p-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="mx-auto"
                />
              </div>
              <div className="p-5 ">
                <h2
                  className={`mt-6  text-3xl font-bold tracking-tight ${
                    dark ? "text-white" : "text-black"
                  } sm:text-5xl`}
                >
                  {movie.title}
                </h2>
                <p
                  className={`mt-6 text-base leading-7 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  <span className="font-bold text-2xl uppercase ">description : </span>
                  <span className="block m-auto"> {movie.overview}</span>
                </p>
                <p
                  className={`mt-6 text-base leading-7 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  <span className="font-bold">original_language : </span>
                  {movie.original_language}
                </p>
                <p
                  className={`mt-6 text-base leading-7 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  <span className="font-bold">popularity : </span>
                  {movie.popularity}
                </p>
                <p
                  className={`mt-6 text-base leading-7 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  <span className="font-bold">release_date : </span>
                  {movie.release_date}
                </p>
                <p
                  className={`mt-6 text-base leading-7 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  <span className="font-bold">vote_count : </span>
                  {movie.vote_count}
                </p>
                <p
                  className={`mt-6 text-base leading-7 ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  <span className="font-bold">vote_average : </span>
                  {movie.vote_average}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <div className="mt-6">
            <h2 className={`text-center font-bold text-2xl ${dark?"text-white":"text-black"} `}>
              Related Movies
            </h2>
            <hr className="w-[500px] m-auto mt-5" />
            <div className="p-8  container   mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 m-auto">
              {movies
                .filter((item) => item.id !== parseInt(id))
                .slice(0, 8)
                .map((item, index) => {
                  return <CardMovie item={item} key={index} />;
                })}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-7">
          <ErrorPage />
        </div>
      )}
    </>
  );
};

export default Details;
