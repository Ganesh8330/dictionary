import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    common:{
      white:'#fff',
    },
    primary: {
      main: '#000042',
      light: '#1c1c84',
      dark: '#000035',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9500ae',
      light: '#d500f9',
      dark: '#dd33fa',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'var(--font-anek-tamil)',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
