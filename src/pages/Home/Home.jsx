import React, { useState, useEffect } from 'react';
import { ListMovies } from './home.styled';
import { getTrendingMovies } from '../../services/api';
import { MoviesList } from 'pages/MoviesList/MoviesList';

import css from './home.module.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <ListMovies>
        <h2 className={css.title}>Trending movies:</h2>
        {loading && <Loader/>}
        {data && <MoviesList movies={data} />}
      </ListMovies>
    </>
  );
};

export default Home;

