import { title } from 'process';
import React from 'react';
import {IFilmsList} from "../interfaces";

import "swiper/css";
import "swiper/css/navigation";

import FilmItem from './FilmItem';

interface IFilmsListComp {
  title: string;
  list: IFilmsList;
}

const FilmsList = ({title, list}: IFilmsListComp) => {
  return (
    <div className="space-x-2 md:space-x-10 pt-10 pb-10 pr-2 md:pr-10 flex flex-col">
      <h2 className="ml-2 md:ml-10 text-4xl mb-10 flex justify-center">{title}</h2>
        <div className="flex items-center justify-center flex-wrap gap-10 overflow-x-hidden">
          {
            list.films.map((el) => (
              <FilmItem url={el.posterUrl} title={el.nameRu} />
            ))
          }
        </div>
    </div>
  );
};

export default FilmsList;