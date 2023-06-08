import { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { Wrapper, Header} from './SearchBox.styled';
import PropTypes from 'prop-types';
import css from '../../pages/Movies/movies.module.css';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    
  };

  return (
    <Wrapper>
      <Header>Search movies:</Header>
      <form onSubmit={handleSubmit}>
        <DebounceInput
          type="text"
          debounceTimeout={500}
          value={query}
          onChange={handleChange}
          placeholder="type here"
        />
        <button type='submit' className={css.btn}>Search</button>
      </form>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
