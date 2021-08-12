import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
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

export default theme;