import { Box, Typography } from '@mui/material';
import styles from './UserCard.module.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import BusinessIcon from '@mui/icons-material/Business';
import { FC } from 'react';
import { SearchedUser, userIconLinks } from '../../types/user';
import { iconsBlue, primaryBlue } from '../../styles/partials/variables';

type UserCardProps = {
  user: SearchedUser;
};

const UserCard: FC<UserCardProps> = ({ user }: UserCardProps) => {
  const {
    avatar_url,
    blog,
    bio,
    created_at,
    followers,
    following,
    name,
    public_repos,
    login: username,
    location,
    twitter_username,
    company,
  } = user;

  const notFound = 'Not available'; // when the icon links have no values, we display thsi text

  const iconLinks: userIconLinks[] = [
    {
      icon: (
        <LocationOnIcon
          sx={{
            verticalAlign: 'center',
            color: iconsBlue,
            marginRight: '0.5rem',
          }}
          fontSize='small'
        />
      ),
      value: location,
    },
    {
      icon: (
        <LinkIcon
          sx={{
            verticalAlign: 'center',
            color: iconsBlue,
            marginRight: '0.5rem',
          }}
          fontSize='small'
        />
      ),
      value: blog,
    },
    {
      icon: (
        <TwitterIcon
          sx={{
            verticalAlign: 'center',
            color: iconsBlue,
            marginRight: '0.5rem',
          }}
          fontSize='small'
        />
      ),
      value: twitter_username,
    },
    {
      icon: (
        <BusinessIcon
          sx={{
            verticalAlign: 'center',
            color: iconsBlue,
            marginRight: '0.5rem',
          }}
          fontSize='small'
        />
      ),
      value: company,
    },
  ];

  return (
    <Box className={styles.card}>
      {/* ============================  ASIDE  ============================*/}
      <img alt='profile' src={avatar_url} className={styles.profilePic} />
      {/* ============================  MAIN  ============================*/}
      <Box>
        {/* ============================  TOP  ============================*/}
        <Box className={styles.headerText}>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant='title'>{name}</Typography>
            <Typography variant='paragraph12'>Joined {created_at}</Typography>
          </Box>
          <Typography variant='paragraph12' color={primaryBlue}>
            @{username.toLowerCase()}
          </Typography>
          <Typography variant='paragraph12'>
            {bio ?? 'This profile has no bio'}
          </Typography>
        </Box>
        {/* ============================  MIDDLE  ============================*/}
        <Box className={styles.numbers}>
          <Typography variant='numbers'>
            Repos <br /> {public_repos}{' '}
          </Typography>
          <Typography variant='numbers'>
            Following <br /> {following}{' '}
          </Typography>
          <Typography variant='numbers'>
            Followers <br /> {followers}
          </Typography>
        </Box>
        {/* ============================  BOTTOM  ============================*/}
        <Box className={styles.icons}>
          {iconLinks.map(({ icon, value }) => [
            <Box display='flex'>
              {icon}
              <Typography variant={value ? 'paragraph12' : 'link'}>
                {' '}
                {value ?? notFound}
              </Typography>
            </Box>,
          ])}
        </Box>
      </Box>
    </Box>
  );
};

export default UserCard;
