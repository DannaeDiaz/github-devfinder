import './App.css';
import { Fragment, useEffect, useState } from 'react';
import { SearchBar } from './components/searchBar/SearchBar';
import { Box, Typography } from '@mui/material';
import { GithubUser, SearchedUser } from './types/user';
import UserCard from './components/userCard/UserCard';
import LightModeIcon from '@mui/icons-material/LightMode';
import axios from 'axios';
import { backgroundWhite } from './styles/partials/variables';
import NotFound from './components/notFound/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './styles/partials/darkTheme';
import TypeToSearch from './components/typeToSearch/TypeToSearch';

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [userResult, setUserResult] = useState<SearchedUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (searchValue !== '') {
          const { data } = await axios.get(
            `https://api.github.com/users/${searchValue}`,
            {
              headers: {
                Authorization: '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',
              },
            },
          );
          const userData: GithubUser = await data;
          // Destructuring the properties of the fetched user
          const {
            avatar_url,
            bio,
            blog,
            company,
            followers,
            following,
            public_repos,
            twitter_username,
            location,
            login,
            name,
            created_at,
          } = userData;
          // Modifying the date format
          const creation_date = String(created_at).split('T')[0];
          const creation_date_formatted = new Date(
            creation_date,
          ).toLocaleDateString('en-US', {
            dateStyle: 'long',
          });
          setUserResult({
            avatar_url,
            bio,
            followers,
            following,
            login,
            name,
            created_at: creation_date_formatted,
            blog,
            company,
            location,
            public_repos,
            twitter_username,
          });
        }
      } catch (error) {
        setUserResult(null);
        console.error(error);
      }
    };
    getUser();
  }, [searchValue]);

  return (
    <Box className='App'>
      {/* ============================  HEADER  ============================*/}
      <Box alignItems='center' display='flex' justifyContent='space-between'>
        <Typography color={backgroundWhite} fontWeight='900' fontSize='1.5rem'>
          devfinder
        </Typography>
        <Typography
          color='white'
          fontSize='14px'
          display='flex'
          width='70px'
          justifyContent='space-between'
        >
          LIGHT
          <LightModeIcon fontSize='small' />
        </Typography>
      </Box>
      {/* ============================  SEARCH BAR  ============================*/}
      <SearchBar
        placeholderTxt='Search Github username...'
        searchQuery={(val) => setSearchValue(val)}
      />
      {/* ============================  BODY  ============================*/}
      <ThemeProvider theme={darkTheme}>
        <Box mt='1rem'>
          {searchValue === '' ? (
            <TypeToSearch />
          ) : (
            <Fragment>
              {userResult === null ? (
                <NotFound />
              ) : (
                <UserCard user={userResult} />
              )}
            </Fragment>
          )}
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
