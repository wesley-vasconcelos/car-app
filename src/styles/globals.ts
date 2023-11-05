
import { createGlobalStyle } from 'styled-components'
import { fontCircularXX } from './fonts'



const GlobalStyle = createGlobalStyle`
  ${fontCircularXX}
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
      scroll-snap-type: y proximity;
      scroll-behavior: smooth;
      overflow-y: scroll;
      height: 100vh;
      background-color: #f1f1f1;
    }

    div::-webkit-scrollbar {
      width: 12px;
    }
`

export default GlobalStyle
