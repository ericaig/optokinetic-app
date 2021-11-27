import { createTheme } from '@mui/material/styles';

// Create a theme instance.
// const theme = createTheme(adaptV4Theme({
const theme = createTheme({
  palette: {
    primary: {
      main: '#2665ae',
    },
    secondary: {
      main: '#6b778c',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#f3f5f8',
    },
  },
  typography: {
    allVariants: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      color: "rgb(23, 43, 77)",
    },
    h5: {
      fontWeight: 600,
    },
    subtitle2: {
      color: "#6b778c",
    }
  }
});

// console.log("THEME.ts",theme)

export default theme;