import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#0080f0',
    },
    secondary: {
      main: '#208080',
    },
  },
});
