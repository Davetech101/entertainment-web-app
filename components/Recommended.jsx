import StRecommended from '../styles/stComponents/StRecommended'
import movies from "../data.json"
import Image from 'next/image';
import Bookmark from '../public/assets/Bookmark';
import Bookmarked from '../public/assets/Bookmarked';
import Movie from '../public/assets/Movie';


const Recommended = () => {
    const recommended = (
        <div className="cont">
          {movies?.map((data, idx) => {
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
    <StRecommended>
        <h2>Recommended for you</h2>

        {recommended}
    </StRecommended>
  )
}

export default Recommended