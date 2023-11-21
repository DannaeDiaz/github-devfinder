import { useState, FC, useEffect } from 'react';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.scss';
import { SearchBtn } from './SearchBtn';
import {
  paragraphPlaceholder,
  primaryBlue,
} from '../../styles/partials/variables';

type SearchBarProps = {
  placeholderTxt: string; // The search bar placeholder text before typing
  searchQuery: (event: string) => void; // handles the input query outside the component
};

export const SearchBar: FC<SearchBarProps> = ({
  searchQuery,
  placeholderTxt,
}: SearchBarProps) => {
  const [innerQuery, setInnerQuery] = useState('');

  // Executes a search only when either the search button or the enter key are pressed
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    searchQuery(innerQuery.toLowerCase());
  };

  // To display the original list automatically when the search is empty
  useEffect(() => {
    if (innerQuery === '') {
      searchQuery(innerQuery);
    }
  }, [searchQuery, innerQuery]);

  return (
    <form
      className={styles.searchForm}
      style={{ width: '100%' }}
      onSubmit={handleSubmit}
    >
      <Input
        className={styles.searchField}
        // The search button at the end of the input with a custom styling
        endDecorator={
          <SearchBtn type='submit' variant='outlined'>
            Search
          </SearchBtn>
        }
        placeholder={placeholderTxt}
        // The search icon button at the beggining of the input with a custom styling
        startDecorator={
          <SearchIcon sx={{ color: primaryBlue }} fontSize='medium' />
        }
        sx={{
          '.MuiInput-input': {
            color: paragraphPlaceholder,
            fontSize: '14px',
          },
        }}
        type='search'
        value={innerQuery}
        onChange={(e) => setInnerQuery(e.target.value)} // updates the innerQuery search value as we type
      />
    </form>
  );
};
