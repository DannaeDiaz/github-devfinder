import { useState, FC, useEffect } from 'react';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.scss';
import { StyledSearchBtn } from './StyledSearchBtn';

type SearchBarProps = {
  placeholderTxt: string; // The search bar placeholder text before typing
  searchQuery: (event: string) => void; // handles the input query outside the component, in the view. Useful for the table user/announcement list rendering
};

export const SearchBar: FC<SearchBarProps> = ({ searchQuery, placeholderTxt }: SearchBarProps) => {
  const [innerQuery, setInnerQuery] = useState('');

  // Executes a search only when the search icon or the enter buttons are pressed
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
    <form className={styles.searchForm} style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Input
        // The search icon button at the end of the input with a custom styling
        endDecorator={
          <StyledSearchBtn type='submit' variant='outlined'>
            <SearchIcon />
          </StyledSearchBtn>
        }
        placeholder={placeholderTxt}
        sx={{ '--Input-decorator-childHeight': '45px', '--Input-focusedHighlight': '#b770fe' }}
        type='search'
        value={innerQuery}
        onChange={(e) => setInnerQuery(e.target.value)} // updates the innerQuery search value as we type
      />
    </form>
  );
};