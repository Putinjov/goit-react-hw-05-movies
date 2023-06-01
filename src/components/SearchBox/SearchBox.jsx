import { DebounceInput } from 'react-debounce-input';
import { useState } from 'react';
import { Wrapper, Header, Icon } from './SearchBox.styled';
import propTypes from 'prop-types';

export const SearchBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Header>Search movies:</Header>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={handleChange}
        placeholder="type here"
      />
      <Icon />
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};