import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound/NotFound';
import { SharedLayout } from './SharedLayouts/SharedLayouts';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  

  return (
    <>
      <Suspense fallback={<p>Load page...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
