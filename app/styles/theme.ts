import { extendTheme } from '@chakra-ui/react';

const theme = {
  components: {
    Drawer: {
      defaultProps: {
        variant: 'primary',
      },
      variants: {
        primary: {
          dialog: {
            bg: 'rgba(0, 0, 0, 0.5)',
            maxW: "150px",
            
          },
        },
      },
    },
    Tabs: {
      defaultProps: {
        variant: 'soft-rounded',
      },
      variants: {
        'soft-rounded': {
          tabpanel: {
            p: 0,
            pt: 4,
          },
          tab: {
            color: '#fff',
            _selected: {
              bg: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
            },
          },
        },
      },
    },
  },
};

export const chakraTheme = extendTheme(theme);
