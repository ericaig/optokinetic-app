import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {},
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
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