import { createGlobalStyle, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        white: '#FFFFFF',
        black: '#2c353c',
        lightGray: '#f7f4f2'
     }
}

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
   body{
       background-color: #f7f4f2;
   }
`;

export { theme, GlobalStyle};