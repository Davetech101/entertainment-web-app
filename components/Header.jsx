import Image from "next/image";
import React from "react";
import BookmarkNI from "../public/assets/BookmarkNI";
import HomeNI from "../public/assets/HomeNI";
import MovieMain from "../public/assets/MovieMain";
import MoviesNI from "../public/assets/MoviesNI";
import TvNI from "../public/assets/TvNI";
import StHeader from "../styles/stComponents/StHeader";
import avatar from "../public/assets/image-avatar.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <StHeader>
      <MovieMain />

      <nav className="nav">
        <Link passHref href="/">
          <span>
            <HomeNI fill={router.asPath === "/" ? "#fff" : "#5A698F"} />
          </span>
        </Link>

        <Link passHref href="/movies">
          <span>
            <MoviesNI fill={router.asPath === "/movies" ? "#fff" : "#5A698F"} />
          </span>
        </Link>

        <Link passHref href="/tv-series">
          <span>
            <TvNI fill={router.asPath === "/tv-series" ? "#fff" : "#5A698F"} />
          </span>
        </Link>

        <Link passHref href="/bookmarked">
          <span>
            <BookmarkNI
              fill={router.asPath === "/bookmarked" ? "#fff" : "#5A698F"}
            />
          </span>
        </Link>
      </nav>

      <Image src={avatar} alt="Avatar" width="30px" height="30px" />
    </StHeader>
  );
};

export default Header;
