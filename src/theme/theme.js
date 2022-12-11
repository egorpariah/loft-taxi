import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FDBF5A',
    },
  },
  components: {
    MuiLink: {
      variants: [
        {
          props: { variant: 'menu' },
          style: {
            fontSize: 21,
            color: '#ffffff',
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 18,
          height: 60,
        },
      },
    },
  },
});
