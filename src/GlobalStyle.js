import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *,
  ::after, ::before {
    box-sizing: inherit;
  };

  body{
    max-width: 1920px;
    max-height: 2668px;
    margin: 0;
  	padding: 0;
  	background-color: ${({ theme }) => theme.colors.lightMode};
    font-family: "Inter", sans-serif;
    
	}
`;
