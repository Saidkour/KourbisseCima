import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_PAGE,
  SET_PAGE_Decrement,
  SET_PAGE_Increment,
  SET_PAGE_Total,
} from "../redux/actionTypes";
import CardMovie from "../components/cardMovie";
import Search from "../components/Search";
import { useLocation } from "react-router-dom";

function Home() {

  const location = useLocation();

  // Check if the current path is "/genre"
  const isGenrePage = location.pathname === "/genre";

  // Render the Search component conditionally based on the path
  

  const movies = useSelector((state) => state.movies);
  const search = useSelector((state) => state.search);
  const page = useSelector((state) => state.page);
  const loading = useSelector((state) => state.loading);
  const dark = useSelector((state) => state.dark);

  const totalPages = useSelector((state) => state.totalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
        <div className="sm:hidden">
        {!isGenrePage && <Search />}
         </div>
      <div className="container block m-auto">
        {loading ? (
          <div className="w-full h-[250px]">
            <span className="loading loading-spinner loading-lg block m-auto pt-[250px]"></span>
          </div>
        ) : (
          <div className="p-8  mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 m-auto">
            {movies?.length !== 0
              ? movies?.map((item, index) => {
                  return <CardMovie item={item} key={index} />;
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
          <div className="join mb-5 border-none ">
            <button
              // onClick={() => setPage((perv) => (perv == 1 ? perv : perv - 1))}
              onClick={() => {
                page == 1
                  ? dispatch({ type: SET_PAGE })
                  : dispatch({ type: SET_PAGE_Decrement });
              }}
              className={`join-item btn  ${
                !dark ? "bg-gray-200 text-black" : ""
              }`}
            >
              «
            </button>
            <button
              className={`join-item btn  ${
                !dark ? "bg-gray-200 text-black" : ""
              }`}
            >
              Page {page} /{totalPages}
            </button>
            <button
              className={`join-item btn  ${
                !dark ? "bg-gray-200 text-black" : ""
              }`}
              onClick={() => {
                page == totalPages
                  ? dispatch({ type: SET_PAGE_Total })
                  : dispatch({ type: SET_PAGE_Increment });
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
