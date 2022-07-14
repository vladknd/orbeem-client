import styled from 'styled-components'
import { Box1 } from '../../styles/Components.styled';
import devices from '../../styles/devices';

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;

    /* background-image: url("/waves.svg"); */
    background-size: 900px 700px;
    /* opacity: 0.3; */
`

export const UpsideContainer = styled.div`
    padding-top: 80px; //PADDING FROM HEADER!

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-image: 
        linear-gradient(to right top, #3a1953, #33174e, #2c164a, #251445, #1f1240, #1e1543, #1c1746, #1a1a49, #1d2255, #1e2b61, #1f346d, #1e3d7a);
    background-position: center;
    background-repeat: repeat;
    background-size: fill;

    /* background-image: url("/waves.svg"); */
    height: 100vh;
`

interface ILogoContainer {
    auth: boolean | null;
}
export const LogoContainer = styled.div`
    filter: ${(props: ILogoContainer) => props.auth ? "drop-shadow(3px -3px 31px #8952FF)" : "none"};
    margin-left: 100px;
    transition: filter 4s;

    display: flex;
    flex-direction: column;
    align-items: center;


    @media ${devices.laptopXS} {
        margin-top: 2%:
        width: 2%:
    }
    @media ${devices.laptopS} {
        margin-top: 3%;
        width: 27%;
    }
    @media ${devices.laptopM} {
        margin-top: 3%;
    }
    @media ${devices.laptopL} {

    }
`

export const TapesContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: end;

    height: 600px;


    @media ${devices.laptopXS} {
        margin-top: 0%:
    }
    @media ${devices.laptopS} {
        margin-top: 0%;
    }
    @media ${devices.laptopM} {
        margin-top: 0%;
    }
    @media ${devices.laptopL} {
        margin-top: 0%;
    }
`

export const Tape = styled.div`
    margin: 30px 0px 3px 0px;
    
    &:hover {
        opacity: 0.8;
    }

    @media ${devices.laptopXS} {
        width: 80%;
    }
    @media ${devices.laptopS} {
        width: 70%;
    }
    @media ${devices.laptopM} {
        width: 80%;
    }
    @media ${devices.laptopL} {
        width: 100%;
    }
 `

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    /* height: 100%; */

`

export const PanelBoxContainer = styled(Box1)`
    padding: 35px;
    width: 350px;
    height: 350px;
`

export const Waves = styled.div`
    margin-top: 900px;
    position: absolute;
    width: 100%;
    height: 750px;
    z-index:0;
    background-image: url("/waves.svg");
    background-position: 0% 1000%;
    opacity: 0.3;
`