import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
  & { 
--color-very-dark-blue: hsl(230, 29%, 20%);
--dark-Grayish-Blue: hsl(230, 11%, 40%);
--color-grayish-blue: hsl(231, 7%, 65%);
--light-grayish-blue: hsl(207, 33%, 95%);
--color-red: hsl(0, 100%, 68%);
  }
}

html{
    font-size: 62.5%;
}

*,::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body{
    min-height: 100vh;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.8rem;
    color: var(--color-very-dark-blue);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

`;

// - Font sizes (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

// - Font weights
// Default: 400
// Medium: 500
// Semi-bold: 600
// Bold: 700

// - Line heights
// Default: 1
// Small: 1.05
// Medium: 1.2
// Paragraph default: 1.6
// Large: 1.8

// - Letter spacing
// -0.5px
// 0.75px */

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

export default GlobalStyle;
