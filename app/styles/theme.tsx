const theme = {
  typography: {
    fontFamily: 'andale mono, monospace',
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'rgba(0,0,0,0.6)',
          height: '3px',
        },
        root: {
          marginTop: '1rem',
          backgroundColor: 'rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'white',
          textTransform: 'capitalize',
          '&.Mui-selected': {
            color: 'rgba(0,0,0,0.6)',
          },
        },
      },
    },
  },
};

export default theme;
