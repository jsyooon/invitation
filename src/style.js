import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  font-size: 16px;
  webkit-text-size-adjust: none;

  font-family: Pretendard, sans-serif;
  font-weight: 300;
  color: #333;
}
a {
  color: inherit;
  text-decoration: none;
  
}
html, body, div, section, h1, h2, h3, h4, h5, h6, p, em, span, img, a, button, svg, dl, dt, dd {
  margin: 0;
  padding: 0;
}

section {
  position: relative;
}

.section {
  background: #fff;
}

button {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: transparent;
  font-weight: inherit;
  border: 0;
}

.wrap {
  overflow: hidden;
  max-width: 960px;
  margin: 0 auto;
}
`;

export default GlobalStyle;
