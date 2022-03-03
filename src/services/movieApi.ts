import { Movie } from "../types";

export const getMovieSearchResults = async (
  searchValue: string
): Promise<MovieSearchResults> => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    );

    const jsonResponse = await response.json();

    return { ...jsonResponse, Response: jsonResponse.Response === "True" };
  } catch (e) {
    return { Response: false, Error: "Something went wrong" };
  }
};

type MovieSearchResults = MovieSearchSuccessResults | MovieSearchErrorResults;

interface MovieSearchSuccessResults {
  Response: true;
  Search: Movie[];
  totalResults: string;
}

interface MovieSearchErrorResults {
  Response: false;
  Error: string;
}
