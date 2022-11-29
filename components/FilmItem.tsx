import React from 'react';
import Image from 'next/image';

interface IFilmItem {
  url: string;
  title: string;
}

const FilmItem = ({url, title}: IFilmItem) => {
  return (
    <div className="flex justify-center items-center relative w-[200px] h-[300px]">
      <Image className="absolute l-0 t-0 object-cover" src={url} alt={title} layout="fill" />
    </div>
  );
};

export default FilmItem;