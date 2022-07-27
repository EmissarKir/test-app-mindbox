import { DefaultTheme } from "styled-components";

export const baseTheme: DefaultTheme = {
  colors: {
    primary: "#e8e8e8",
    primaryLigth: "#fff",
    accentDark: "#1BA098",
    accentLigth: "#15d1c6",
    textDark: "#151D28",
    bg: "#051622",
  },
  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(max-width: 960px)",
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },
  // z-index
  order: {
    sidebar: 999,
    backDrop: 998,
  },
};
