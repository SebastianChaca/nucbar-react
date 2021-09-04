import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#eceae9',
      },
    },
  },
  colors: {
    nucba: {
      100: '#f7fafc',
      form: '#ffff',
      btn: '#4F7CAC',
      section: '#42c5f5',
      second: '#E22BDF',
      primary: '#8A2BE2',
      hover: '#8658A5',
    },
  },
});
