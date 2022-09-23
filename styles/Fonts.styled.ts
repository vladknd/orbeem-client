import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    //AVENIR-NEXT
    @font-face {
        font-family: 'AvenirNext';
        src: url('/fonts/AvenirNextLTPro-UltLt.otf'); 
        font-weight: UltLt;
    }
    /* @font-face {
        font-family: 'AvenirNext';
        src: url('/fonts/AvenirNextLTPro-Regular.otf'); 
        font-weight: regular;
    } */
    //INTER
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter/Inter-Thin.otf'); 
        font-weight: thin;
    }
`;