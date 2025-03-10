import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black:'#33354d',
    },
    primary: {
      main: "#4044ee", //hover color
      light: "#6366f1", //button color
      dark: "#6366f1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#eff2fc", //chip
      light: "#f3f6ff",// background
      dark: "#0b0f19", // footer
      contrastText: "rgba(255, 255, 255, 0.85)",// footer text
    },
  },
  typography: {
    fontFamily: "var(--font-anek-tamil), sans-serif",
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default theme;
