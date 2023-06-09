import { useParams, Link, Outlet, useLocation,} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from '../../services/api';
import css from './movie-details.module.css';
import noMovieImg from '../../img/no-poster-available.jpg';
import { NotFound } from 'pages/NotFound/NotFound';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const cameBack = location.state?.from ?? '/';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    if (!movieId) {
      setIsError(true);
      setLoading(false);
    } else {
      getData();
    }
  }, [movieId]);

  if (loading) {
    return 'Loading...';
  }

  if (isError) {
    return NotFound();
  }

  const getYear = releaseDate => {
    const date = new Date(releaseDate);
    const year = date.getFullYear();
    return isNaN(year) ? 'Unknown' : year;
  };

  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };

  const posterPath = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : noMovieImg;

  return (
    <>
      <Link className={css.btn} to={cameBack}>
        Go Back
      </Link>
      <div className={css.imgWrap}>
        <img className={css.img} alt={data.original_title} src={posterPath} />
        <div className={css.descrWrap}>
          <h1>
            {data.original_title} ({getYear(data.release_date)})
          </h1>
          <p className={css.descrTitle}>
            User Score: {~~(data.vote_average * 10)}%
          </p>
          <p className={css.descrTitle}>Overview</p>
          <p>{data.overview}</p>
          <p className={css.descrTitle}>Genres</p>
          <p>{getGenres(data.genres)}</p>
        </div>
      </div>
      <div>
        <ul className={css.btnList}>
          <li>
            <Link to="cast" state={{ from: cameBack }}>
              <button className={css.castBtn}>Cast</button>
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: cameBack }}>
              <button className={css.reviewsBtn}>Reviews</button>
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />

      </Suspense>
    </>
  );
};

export default MovieDetails;
