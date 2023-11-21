import Button from '@mui/joy/Button/Button';
import { styled } from '@mui/material/styles';
import { backgroundWhite, primaryBlue } from '../../styles/partials/variables';

// Custom button (based on the MUI button) for the input's search button

export const SearchBtn = styled(Button)(() => ({
  backgroundColor: primaryBlue,
  border: 'none',
  borderRadius: '0.3rem',
  '&.MuiButton-root:hover': {
    backgroundColor: primaryBlue,
  },
  color: backgroundWhite,
  fontSize: '0.75rem',
  padding: '0 0.875rem',
  minHeight: '1.5rem',
}));
