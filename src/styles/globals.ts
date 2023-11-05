
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
      color: #1d1d1d;
      font-family: "CircularXX";
    }

    body {
      height: 100%;
      background-color: #f1f1f1;
    }

`

export default GlobalStyle
