import { useState, useEffect, useCallback } from "react";

function Home() {
  const [searchVal, setSearchVal] = useState("");
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = useCallback(() => {
    const url =
      search !== ""
        ? `https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=${search}&page=${page}`
        : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=fef55a6754f2f6d00a0038388915039c`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error("There is an error: ", error))
      .finally(() => {
        setLoading(false);
      });
  }, [search, page]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      <div className="container block m-auto">
        <div className="mt-5">
          <label className="input input-bordered flex items-center gap-2 max-w-[350px] m-auto">
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.currentTarget.value)}
              className="grow"
              placeholder="Search a movie"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#000000"
              onClick={() => setSearch(searchVal)}
              className="w-5 h-5 opacity-70 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                className="w-[20px] h-[20px]"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
                {searchVal!=""?<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setSearchVal("")} className="w-[20px] h-[20px] cursor-pointer hover:rotate-180 duration-200 transition-all  ease-in-out" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                :""}
          </label>
        </div>
        {loading ? (
          <div className="w-full h-[250px]">
            <span className="loading loading-spinner loading-lg block m-auto pt-[250px]"></span>
          </div>
        ) : (
          <div className="p-8  mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 m-auto">
            {movies?.length !== 0
              ? movies?.map((item, index) => {
                  return (
                    <div
                      className={`${
                        item.poster_path ? "" : "hidden"
                      } hover:opacity-[0.9] text-center overflow-hidden rounded-xl shadow-md transition-shadow`}
                      key={index}
                    >
                      <div className="sm:max-w-[300px] h-auto">
                        <span className="absolute mt-[2px] ml-[108px] bg-yellow-400 p-1 rounded-xl">
                          {item.vote_average.toFixed(1)}
                        </span>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          className="w-full h-full sm:w-[280px] sm:h-[340px] cursor-pointer overflow-hidden"
                          alt={item.name}
                        />
                      </div>
                      <span className="flex justify-evenly font-semibold my-5">
                        {item?.name}
                        {item?.original_title}
                        {" "}
                        <span className="text-yellow-400 ml-10 justify-end">
                          {item.first_air_date?.slice(0, 4)}
                          {item.release_date?.slice(0, 4)}
                        </span>
                      </span>
                    </div>
                  );
                })
              : search != ""
              ? "No result !!"
              : ""}
          </div>
        )}

        <div
          className={`${
            movies.length == 0 ? "hidden" : ""
          } flex justify-center`}
        >
          <div className="join">
            <button
              onClick={() => setPage((perv) => (perv == 1 ? perv : perv - 1))}
              className="join-item btn"
            >
              «
            </button>
            <button className="join-item btn">
              Page {page} /{totalPages}
            </button>
            <button
              className="join-item btn"
              onClick={() => {
                setPage((perv) => (perv == totalPages ? perv : perv + 1));
              }}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
