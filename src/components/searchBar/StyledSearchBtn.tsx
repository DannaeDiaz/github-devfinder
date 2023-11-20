import Button from '@mui/joy/Button/Button';
import { styled } from '@mui/material/styles';

// Custom button (based on the MUI button) for the input's search button
// that resembles better to the Figma design

export const StyledSearchBtn = styled(Button)(() => ({
  backgroundColor: '#2a5bdf',
  color: 'white',
  border: 'none',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  '&.MuiButton-root:hover': {
    backgroundColor: '#2046ad',
  },
}));
