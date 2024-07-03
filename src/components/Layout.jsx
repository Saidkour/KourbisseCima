import React, { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { SET_GENRES, SET_LOADING,SET_MOVIES,SET_TOTAL_PAGES } from "../redux/actionTypes";

const Layout = () => {
  const search = useSelector((state) => state.search);
  const page = useSelector((state) => state.page);
  const genre = useSelector((state) => state.genre);
  const dispatch = useDispatch();



  const fetchMovies = useCallback(() => {
    const url =
      search !== ""
        ? `https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=true&query=${search}&page=${page}`
        : `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&page=${page}&with_genres=${genre}&sort_by=popularity.desc&api_key=fef55a6754f2f6d00a0038388915039c`;
    dispatch({ type: SET_LOADING, payload: true });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        dispatch({ type: SET_MOVIES, payload: data.results });
        dispatch({ type: SET_TOTAL_PAGES, payload: data.total_pages });
      })
      .catch((error) => console.error("There is an error: ", error))
      .finally(() => {
        dispatch({ type: SET_LOADING, payload: false });
      });
  }, [search,genre, page]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=fef55a6754f2f6d00a0038388915039c"
        );
        const data = await response.json();
        console.log(data.genres);
        dispatch({ type: SET_GENRES, payload: data.genres });
      } catch (error) {
        console.error("There is an error: ", error);
      }
    };

    fetchGenres();
  }, []);

  const dark = useSelector((state) => state.dark);
  return (
    <div className={dark?"":"bg-white"}>
      <Nav />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
