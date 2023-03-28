import { createGlobalStyle } from "styled-components";

export const DarkTheme = createGlobalStyle`
        :root{
        --color-primary: #FF577F;
        --color-default: #FFFFFF;
        --color-grey-0: #868E96;
        --color-grey-1: #343B41;
        --color-grey-2: #212529;
        --color-grey-3: #212529;
        --color-grey-4: #121214;
    }
`;

export const LightTheme = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-default: #000000;
        --color-grey-0: #8f8f8f;
        --color-grey-1: #FDFDFD;
        --color-grey-2: #F1F1F1;
        --color-grey-3: #F1F1F1;
        --color-grey-4: #FDFDFD;
    }
`;
