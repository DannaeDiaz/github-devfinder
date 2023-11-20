import './App.css';
import { Fragment, useEffect, useState } from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import { Box } from '@mui/material';

function App() {

  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue])
  
  return (
    <Box className='App'>
      <SearchBar placeholderTxt='Search...' searchQuery={(val) => setSearchValue(val)} />
    </Box>
  );
}

export default App;
