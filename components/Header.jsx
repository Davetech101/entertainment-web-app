import Image from "next/image";
import React from "react";
import BookmarkNI from "../assets/BookmarkNI";
import HomeNI from "../assets/HomeNI";
import MovieMain from "../assets/MovieMain";
import MoviesNI from "../assets/MoviesNI";
import TvNI from "../assets/TvNI";
import StHeader from "../styles/stComponents/StHeader";
import avatar from "../assets/image-avatar.png";

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
