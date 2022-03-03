import React, { useCallback, useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { SearchBarContainer, SearchIcon, SearchInput } from './styled';

const Search = (props: SearchProps) => {
  const { search } = props

  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  console.log(searchValue)

  const debouncedFetchData = useCallback(debounce((searchValue: string) => {
    search(searchValue);
  }, 2000), [search])

  useEffect(() => {
    debouncedFetchData(searchValue)
  }, [searchValue])

  const callSearchFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    search(searchValue);
    // resetInputField();
  }
  return (
    <SearchBarContainer>
      <SearchIcon>
        <MdSearch />
      </SearchIcon>
      <SearchInput
        onChange={handleSearchInputChanges}
        value={searchValue}
        placeholder='Search Movies'
      />
    </SearchBarContainer>
  );
}

Search.propTypes = {
  search: PropTypes.func,
};

Search.defaultProps = {
  search: () => { },
};

interface SearchProps {
  search(text: string): void
}

export default Search;
