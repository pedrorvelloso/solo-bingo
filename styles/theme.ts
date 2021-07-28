import { darken, desaturate } from 'polished';
import { DefaultTheme } from 'styled-components';

const PRIMARY_COLOR = '#9202f2';
const SECONDARY_COLOR = '#09e3e3';

const DANGER_COLOR = '#e00b0b';
const WARN_COLOR = '#e0dd0b';
const SUCCESS_COLOR = '#0be044';

const BACKGROUND_COLOR = darken(0.33, desaturate(0.85, PRIMARY_COLOR));

const theme: DefaultTheme = {
  font: {
    size: {
      sm: '0.8rem',
      md: '1rem',
      lg: '1.6rem',
      xl: '2rem',
    },
  },
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    danger: DANGER_COLOR,
    warn: WARN_COLOR,
    success: SUCCESS_COLOR,
  },
  background: {
    color: BACKGROUND_COLOR,
  },
};

export default theme;
