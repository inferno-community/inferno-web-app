import { createMuiTheme } from '@material-ui/core';

const colors = {
  white: '#fff',
  black: '#222',
  red: '#d95d77',
  blue: '#5d89a1',
  blueLighter: '#9ad2f0',
  gray: '#4a4a4a',
  grayMedium: '#bbbdc0',
  grayBlue: '#cbd5df',
  grayLight: '#6c6c6c',
  grayLighter: '#eaeef2',
  grayDark: '#444',
  grayVeryDark: '#3a3a3a',
  green: '#2fa874',
  orange: '#F88B30',
};

const paletteBase = {
  primary: {
    main: colors.orange,
  },
  secondary: {
    main: colors.blue,
  },
  common: colors,
};

const lightTheme = createMuiTheme({
  palette: { ...paletteBase },
});

export default lightTheme;
