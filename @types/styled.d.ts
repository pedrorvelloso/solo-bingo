import 'styled-components';

type Colors = 'primary' | 'secondary';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      warn: string;
      success: string;
    };
    background: {
      color: string;
    };
  }
}
