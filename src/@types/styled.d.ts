import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    title: 'light';

    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;

      secondary: string;
      secondaryDark: string;
      secondaryLight: string;

      textMedium: string;
      textDark: string;

      alert: string;

      white: string;
      black: string;
      blue: string;
      blue6: string;
      gray: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;

      grayHeader: string;
      backgroundPrimary: string;
    };
  }
}
