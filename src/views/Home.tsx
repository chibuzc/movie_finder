import React, { useState, useEffect } from "react";

import Search from "../components/SearchBar";
import MoviesGrid from "../components/Grid";


import {
  RootContainer,
  MoviesGridSection,
  SearchBarSection,
} from "./styled";
import { getMovieSearchResults } from "../services/movieApi";
import { Movie } from "../types";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const search = async (searchValue: string) => {
    if (!searchValue.length) {
      setMovies([]);
      return
    }
    setLoading(true);
    setErrorMessage(null);

    const searchResultResponse = await getMovieSearchResults(searchValue)

    if (searchResultResponse.Response) {
      setMovies(searchResultResponse.Search);
      setLoading(false);
    } else {
      setErrorMessage(searchResultResponse.Error);
      setLoading(false);
    }

  };

  console.log(process.env.REACT_APP_OMDB_API_KEY)

  return (
    // <>
    <RootContainer>
      <SearchBarSection>
        <Search search={search} />
      </SearchBarSection>
      <MoviesGridSection>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div> <h2>{errorMessage}</h2></div>
        ) : movies.length ?
          <MoviesGrid items={movies} />
          : <div> <h2>Search for a movie by title</h2></div>
        }
      </MoviesGridSection>
    </RootContainer>
    // </>
  );
};

export default Home;
