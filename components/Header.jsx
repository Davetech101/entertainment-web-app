import Image from "next/image";
import React from "react";
import BookmarkNI from "../public/assets/BookmarkNI";
import HomeNI from "../public/assets/HomeNI";
import MovieMain from "../public/assets/MovieMain";
import MoviesNI from "../public/assets/MoviesNI";
import TvNI from "../public/assets/TvNI";
import StHeader from "../styles/stComponents/StHeader";
import avatar from "../public/assets/image-avatar.png";

const Header = () => {
  return (
    <StHeader>
      <MovieMain />

      <div className="nav">
        <HomeNI />

        <MoviesNI />

        <TvNI />

        <BookmarkNI />
      </div>

      <Image src={avatar} alt="Avatar" width="30px" height="30px" />
    </StHeader>
  );
};

export default Header;
