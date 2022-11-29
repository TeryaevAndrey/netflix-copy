export interface IFilmsList {
  pagesCount: number;
  films: IFilm[];
}

export interface IFilm {
  countries: ICountries[];
  filmId: number;
  filmLength: string;
  genres: IGenres[];
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingChange?: null | any;
  ratingVoteCount: number;
  year: string | number;
}

export interface ICountries {
  country: string;
}

export interface IGenres {
  genre: string;
}