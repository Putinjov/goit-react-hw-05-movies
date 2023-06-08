import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from '../../services/api';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from '../MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import {css} from 'styled-components';

 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
    const query = searchParams.get('query');

     const getMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovie(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

     if (query) {
      
      getMovie();
    }
  }, [searchParams]);
   
  const onSubmit = query => {
        setSearchParams({ query });
  };

  return (
    <>
      {loading && <Loader />}
      <SearchBox onSubmit={onSubmit}/>
      {movies && <MoviesList movies={movies} />}
      {movies.length < 1 && <p className={css.error}>No data found</p>}
    </>
  );
};

export default Movies;
