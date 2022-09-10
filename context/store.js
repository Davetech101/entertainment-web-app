import React, { useState, useCallback, useEffect } from "react";
import data from "../data.json";

const initialState = {
  movies: [...data],
  bookmarkMovie: () => {},
};

const lsMoviesKey = "ewa";

export const Store = React.createContext(initialState);

const StoreProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const bookmarkMovie = useCallback((title) => {
    let bookmarks = []
    setMovies((prev) => {
      bookmarks = prev.map((movie) => {
        return movie.title === title
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie;
      });
      return bookmarks;
    });
    localStorage.setItem(lsMoviesKey, JSON.stringify(bookmarks))
  }, []);

  useEffect(() => {
    const lsMovies = window.localStorage.getItem(lsMoviesKey);
    if (!lsMovies) {
      localStorage.setItem(lsMoviesKey, JSON.stringify(initialState.movies));
    } else {
      movies.length <= 0 && setMovies(JSON.parse(lsMovies));
    }
  }, [movies]);

  const value = {
    movies,
    bookmarkMovie,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export default StoreProvider;
