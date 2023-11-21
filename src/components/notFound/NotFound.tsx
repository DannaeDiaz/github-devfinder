import { Typography } from '@mui/material';
import { ReactComponent as NotFound404 } from '../../assets/404.svg';
import { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <Typography variant='title'>User Not Found</Typography>
      <NotFound404 />
    </Fragment>
  );
};

export default NotFound;
