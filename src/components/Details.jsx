import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Details = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies);
  const movie = movies?.find((movie) => movie.id === parseInt(id));
  const dark = useSelector((state) => state.dark);
  return (
    <>
      {movie ? (
        <main className="relative px-6 py-5 lg:px-8">
          <div className={`text-center block sm:grid z-10 grid-cols-1 sm:grid-cols-2 rounded-lg p-5`}>
            <div className="p-3">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mx-auto"
              />
            </div>
            <div className="p-5">
              <h2 className="mt-6  text-3xl font-bold tracking-tight text-black sm:text-5xl">
                {movie.title}
              </h2>
              <p className="mt-6 text-base leading-7 text-black">
                <span className="font-bold uppercase">description : </span>
                <span className="block m-auto :">
                  {" "}
                  {movie.overview}
                </span>
              </p>
              <p className="mt-6 text-base uppercase leading-7 text-black">
                <span className="font-bold">original_language : </span>
                {movie.original_language}
              </p>
              <p className="mt-6 text-base uppercase leading-7 text-black">
                <span className="font-bold">popularity : </span>
                {movie.popularity}
              </p>
              <p className="mt-6 text-base uppercase leading-7 text-black">
                <span className="font-bold">release_date : </span>
                {movie.release_date}
              </p>
              <p className="mt-6 text-base uppercase leading-7 text-black">
                <span className="font-bold">vote_count : </span>
                {movie.vote_count}
              </p>
              <p className="mt-6 text-base uppercase leading-7 text-black">
                <span className="font-bold">vote_average : </span>
                {movie.vote_average}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go back home
                </a>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div>
          <ErrorPage />
        </div>
      )}
    </>
  );
};

export default Details;
