import Image from "next/image";
import data from "../data.json";
import image from "../public/assets/thumbnails/112/regular/large.jpg";
import StTrending from "../styles/stComponents/StTrending";

const Trending = () => {
  const filteredData = data.filter((dat) => dat.isTrending);

  const trending = (
    <div className="cont">
      {filteredData?.map((data) => {
        const img = data.thumbnail.trending.small;
        return (
          <div key={data.title}>
            <div className="img">
              <Image
                style={{
                  borderRadius: "10px",
                }}
                src={img}
                alt="Avatar"
                width="240px"
                height="140px"
              />
              <div className="info">
                <div className="stats">
                  <span className="stat">{data.year}</span>
                  <span className="dot"></span>
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
