import Image from "next/image";
import React from "react";
import { Movie } from "../types";
import BgImg from "../public/bg.jpg";

interface IBanner {
  top: Movie[];
}

function Banner({ top }: IBanner) {
  return (
    <div className="relative w-[100%] h-[100%]">
      <div className="absolute l-0 t-0 h-[95vh] -z-10">
        <Image className="h-[100%] object-cover" src={BgImg} alt="banner" />
      </div>
      <div className="h-[100%] flex flex-col justify-center space-x-2 md:space-x-10">
          <h1 className="bannerTitle">Фильмы онлайн!</h1>
          <p className="bannerText">Вы любите смотреть фильмы онлайн? Стоит задержаться на Netflix!</p>
          <button className="bannerBtn w-[200px] mt-5">Save changes</button>
      </div>
    </div>
  );
}

export default Banner;
