import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLigth: string;
      accentDark: string;
      accentLigth: string;
      textDark: string;
      bg: string;
    };
    media: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
    };
    order: {
      sidebar: number;
      backDrop: number;
    };
  }
}
