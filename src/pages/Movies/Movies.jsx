import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovie } from '../../services/api';
import css from './movies.module.css';

const Movies = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const [query, setQuery] = useState(() => searchQuery || '');

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { results } = await searchMovie(searchQuery);
        setData(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      getData();
    }
  }, [searchQuery]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: query });
  };

  let content = null;

  if (!searchQuery) {
    content = <p className={css.descr}>Please enter a search query</p>;
  } else if (loading) {
    content = 'Loading...';
  } else if (data.length > 0) {
    content = data.map(({ title, id }) => (
      <li key={id} className={css.listItem}>
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {title}
        </Link>
      </li>
    ));
  } else {
    content = (
      <p className={css.descr}>
        No movies with this title were found. Try entering another title
      </p>
    );
  }

  return (
    <>
      <div className={css.wrap}>
        <h2 className={css.title}>Search movies:</h2>
        <form onSubmit={handleSubmit} className={css.movieForm}>
          <input
            value={query}
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Type here"
            className={css.movieInput}
          />
          <button type="submit" className={css.btn}>
            Search
          </button>
        </form>
      </div>
      <ul className={css.list}>{content}</ul>
    </>
  );
};

export default Movies;
