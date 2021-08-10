import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4a839e',
    },
    secondary: {
      main: '#93c88d',
    },
    error: {
      main: '#ee6f79',
    },
    background: {
      default: '#f3f5f8',
    }
  }
});

export default theme;