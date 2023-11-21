import { createTheme } from '@mui/material';
import { backgroundWhite, iconsBlue } from './variables';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    link: true;
    title: true;
    paragraph12: true;
    numbers: true;
  }
}

/* ==================== CUSTOMIZING THE THEME ==================== */
// for the light mode we could add another theme similar to this with other colors
export const darkTheme = createTheme({
  components: {
    /* ==================== TYPOGRAPHY ==================== */
    MuiTypography: {
      defaultProps: {
        // The props to change the default for.
        fontFamily: 'Arial',
        fontStyle: 'normal',
      },
      variants: [
        {
          props: { variant: 'link' },
          style: {
            color: iconsBlue,
            cursor: 'pointer',
            fontSize: '0.875rem',
            textAlign: 'center',
            lineHeight: '24px',
          },
        },
        {
          props: { variant: 'title' },
          style: {
            color: backgroundWhite,
            fontWeight: 900,
            fontSize: '1.5rem',
            lineHeight: '32px',
            textAlign: 'left',
          },
        },
        {
          props: { variant: 'paragraph12' },
          style: {
            color: backgroundWhite,
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
            textAlign: 'left',
            display: 'block',
          },
        },
        {
          props: { variant: 'numbers' },
          style: {
            color: backgroundWhite,
            fontWeight: 700,
            fontSize: '0.875rem',
            textAlign: 'center',
            lineHeight: '24px',
          },
        },
      ],
    },
  },
});
