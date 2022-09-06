import { useState, useEffect } from "react";
import movies from "../data.json";
import Image from "next/image";
import Bookmark from "../public/assets/Bookmark";
import Bookmarked from "../public/assets/Bookmarked";
import Movie from "../public/assets/Movie";
import StMovies from "../styles/stComponents/StMovies";

const Movies = ({ search, type }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    switch (type) {
      case "movies":
        setFilteredMovies(
          movies?.filter((movie) => movie.category === "Movie")
        );
        break;

      case "series":
        setFilteredMovies(
          movies?.filter((movie) => movie.category === "TV Series")
        );
        break;

      case "bookmark":
        setFilteredMovies(movies?.filter((movie) => movie.isBookmarked));
        break;

      default:
        setFilteredMovies(movies);
    }
  }, [type]);

  const searched = filteredMovies.filter((data) => {
    const title = data.title.toLocaleLowerCase();
    const searched = search.toLocaleLowerCase();

    return title.includes(searched);
  });

  const recommended = (
    <div className="cont">
      {searched.map((data, idx) => {
        const img = data.thumbnail.regular.small;
        return (
          <div key={data.title} className="subCont">
            <div className="img">
              <Image
                style={{
                  borderRadius: "10px",
                }}
                src={img}
                layout="fill"
                alt="Avatar"
              />
              <button
                onClick={() =>
                  setFilteredMovies((prev) =>
                    prev.map((el, id) =>
                      id === idx
                        ? { ...el, isBookmarked: !el.isBookmarked }
                        : el
                    )
                  )
                }
              >
                {data.isBookmarked ? <Bookmarked /> : <Bookmark />}
              </button>

              <div className="info">
                <div className="stats">
                  <span className="stat">{data.year}</span>
                  <span className="dot"></span>
                  <Movie />
                  <span className="stat">{data.category}</span>
                  <span className="dot"></span>
                  <span className="stat">{data.rating}</span>
                </div>
                <span className="title">{data.title}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <StMovies>
      {!search && (
        <h2>
          {type === "movies"
            ? "Movies"
            : type === "series"
            ? "Tv Series"
            : type === "bookmark"
            ? "Bookmarked Movies"
            : "Recommended for you"}
        </h2>
      )}

      {search ? (
        <p>
          Found {searched.length} results for `{search}`{" "}
        </p>
      ) : (
        <></>
      )}
      {recommended}
    </StMovies>
  );
};

export default Movies;
