import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header,  StyledLink } from './SharedLayouts.styled';
import { Loader } from '../Loader/Loader';
import css from '../app.module.css';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav className={css.navigation}>
          <StyledLink to="/" onClick={e => e.currentTarget.blur()}>
            Home
          </StyledLink>
          <StyledLink to="/movies" onClick={e => e.currentTarget.blur()}>
            Movies
          </StyledLink>
        </nav>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
