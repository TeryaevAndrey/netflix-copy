export interface Movie {
    filmId: number;
    nameRu: string;
    nameEn: string;
    year: string;
    filmLength: string;
    countries: string[];
    genres: string[];
    rating: number;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
}