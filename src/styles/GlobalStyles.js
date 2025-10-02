import '@fontsource/poppins';
import '@fontsource/kaushan-script';
import '@fontsource/sirin-stencil';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

${'' /* *{
    outline: 1px solid red !important;
}  */}

html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    background-color: #FAFAFA;
    color: #4A4A4A;
    line-height: 1.7;
    letter-spacing: 0.3px;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #4A4A4A;
    line-height: 1.4;
}
h1, h2 {
    font-weight: 500;
}
a{
    color: inherit;
    text-decoration:none;
    transition: color 0.3s ease;
}
`;

export default GlobalStyles;
