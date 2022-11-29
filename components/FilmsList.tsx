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
    <>
      <h2>{title}</h2>
      <div>
        <div>
          {
            list.films.map((el) => (
              <FilmItem url={el.posterUrl} title={el.nameRu} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default FilmsList;