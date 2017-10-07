/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: Topaz;
    src: url(/fonts/topaz.woff2) format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 16px;
    line-height: 1.25;
    font-family: Topaz, sans-serif;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100vh;
    height: 100vh;
    min-height: min-content;
    overflow: hidden;
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: normal;
    line-height: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body,
  button,
  a,
  input {
    cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Y3Vyc29yPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yIDBoMnYySDJWMHptMiAyaDR2Mkg0VjJ6bTQgMmg0djJIOFY0em00IDJoNHYyaC00VjZ6bTQgMmg0djJoLTRWOHptLTIgNGgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6bTIgMmgydjJoLTJ2LTJ6IiBmaWxsPSIjRUVDIi8+PHBhdGggZD0iTTAgMGgydjJIMFYwem0yIDJoMnYySDJWMnptMiAyaDR2NEg0VjR6bTIgNGg2djRINlY4em0yIDRoNHY0SDh2LTR6bTIgNGgydjRoLTJ2LTR6TTggNmg0djJIOFY2em00IDJoNHY0aC00Vjh6bTQgMmg0djJoLTR2LTJ6bS00IDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yem0yIDJoMnYyaC0ydi0yeiIgZmlsbD0iI0U0NCIvPjxwYXRoIGQ9Ik0wIDJoMnYySDBWMnptMiAyaDJ2NEgyVjR6bTIgNGgydjRINFY4em0yIDRoMnY0SDZ2LTR6bTIgNGgydjRIOHYtNHptNC0yaDJ2MmgtMnYtMnptMiAyaDJ2MmgtMnYtMnptMiAyaDJ2MmgtMnYtMnptMiAyaDJ2MmgtMnYtMnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+), default;
  }
`;

// input,
// button {
//   appearance: none;
//   background-color: transparent;
//   border-radius: 0;
//   border: 0;
// }
