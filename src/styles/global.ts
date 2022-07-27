import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
*::after,
*::before {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
ul{
  list-style: none;
}
html,
body {
  line-height: 1.5;
  height: 100%;
  width: 100%;
 
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.primary};
 
  padding: 0 calc(20px - (100vw - 100%)) 0 0;

  }
`;
