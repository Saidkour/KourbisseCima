import { useState, useEffect, useCallback } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");

  const fetchMovies = useCallback(() => {
    if(search.length>=3){
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=${search}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setMovies(data.results);
          setTotalPages(data.total_pages);
        })
        .catch((error) => console.error("There is an error: ", error));
    }
  }, [search, page]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[page])

  return (
    <>
    <div className="container block m-auto">
      <div className="">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" onChange={(e) => setSearch(e.currentTarget.value)}  className="grow" placeholder="Search a movie" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="p-8  mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {movies?.length !== 0
          ? movies?.map((item, index) => {
              return (
                <div
                  className={`${item.poster_path ?"": "hidden"} hover:opacity-[0.9] text-center  rounded-md shadow-md transition-shadow`}
                  key={index}
                >
                  <div className="max-w-[300px] h-auto">
                  <span className="absolute mb-[110px] ml-[110px] bg-yellow-400 p-1 rounded-lg">{item.vote_average.toFixed(1)}</span>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="w-[280px] h-[340px] cursor-pointer overflow-hidden"
                    alt={item.name}
                  />
                  </div>
                  <span className="flex justify-evenly font-semibold my-5">
                    {item.name}{" "}
                     <span className="text-yellow-400 ml-10 justify-end">
                      {item.first_air_date.slice(0, 4)}
                    </span>
                  </span>
                </div>
              );
            })
          : ""}
      </div>
      <div className={`${movies.length==0?'hidden':""} flex justify-center`}>
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
