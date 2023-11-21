import { Typography } from '@mui/material';
import { Fragment } from 'react';
import Default from '../../assets/default.png';

const TypeToSearch = () => {
  return (
    <Fragment>
      <Typography variant='title'> Type to search </Typography>
      <img alt='search' src={Default} width='100%' />
    </Fragment>
  );
};

export default TypeToSearch;
