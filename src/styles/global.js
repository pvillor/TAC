import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --light-gray: #F5F7FA;
        --light-grey: #DDE6E9;
        --gray: #CECECE;
        --grey: #656565;
        --black: #000000;
        --light-blue: #66AFE9;
        --blue: #5D9CEC;
        --dark-blue: #3D75BB;
        --white: #FFFFFF;
    }

    body {
        background-color: var(---light-gray)
    }

    a {
        text-decoration: none;
    }
`