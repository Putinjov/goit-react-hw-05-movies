import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../services/api';
import css from './cast.module.css';
import PropTypes from 'prop-types';

import userImg from '../../img/user.jpg';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCast(movieId);
        setData(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return 'Loading...';
  }

  if (!data || data.length === 0) {
    return <p className={css.error}>No data found</p>;
  }

  return (
    <div className={css.listWrap}>
      <ul className={css.list}>
        {data.map(({ name, character, profile_path, id }) => (
          <li key={id} className={css.listItem}>
            <img
              className={css.listImg}
              alt={name}
              src={profile_path ? `https://image.tmdb.org/t/p/w92${profile_path}` : userImg}
            />
            <p className={css.listName}>{name}</p>
            <p className={css.listCharacter}>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;

