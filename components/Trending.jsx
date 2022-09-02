import Image from "next/image";
import movies from "../data.json";
import StTrending from "../styles/stComponents/StTrending";
import Movie from "../public/assets/Movie";
import Bookmark from "../public/assets/Bookmark";
import Bookmarked from "../public/assets/Bookmarked";
import { useState } from "react";

const Trending = () => {
  const [data, setData] = useState(movies);
  const filteredData = data?.filter((dat) => dat.isTrending);

  const trending = (
    <div className="cont">
      {filteredData?.map((data, idx) => {
        const img = data.thumbnail.trending.small;
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
                onClick={() => setData((prev) => (
                  prev.map((el, id) => (
                    id === idx ? {...el, isBookmarked: !el.isBookmarked} : el
                  ))
                ))}
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
    <StTrending>
      <h3>Trending</h3>
      {trending}
    </StTrending>
  );
};

export default Trending;
