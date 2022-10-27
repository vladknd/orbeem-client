import styled from 'styled-components'
import { BaseDiv, Box1, Button1, Text } from '../../styles/Components.styled';
import devices from '../../styles/devices';

export const HomeContainer = styled.div`
    /* display: flex;
    flex-direction: column; */
    /* width: 100vw; */
    /* height: 100vh; */

    /* background-size: 900px 700px; */
`

export const UpsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-image: 
        linear-gradient(to right top, #3a1953, #33174e, #2c164a, #251445, #1f1240, #1e1543, #1c1746, #1a1a49, #1d2255, #1e2b61, #1f346d, #1e3d7a);
    background-position: center;
    background-repeat: repeat;
    background-size: fill;


    height: 100vh;
`

interface ILogoContainer {
    auth: boolean | (() => Promise<void>)
}
export const LogoContainer = styled.div`
    transition: filter 4s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40%;
    height: 100%;

    filter: ${(props: ILogoContainer) => props.auth ? "drop-shadow(3px -3px 31px #8952FF)" : "none"};
`

export const LogoImage = styled.div`
    position: relative;
    width: 100%;
    height: 45%;
`

export const SignButton = styled(Button1)`
    margin-top: 5%;

    font-size: 1vw;
    letter-spacing: 5px;
    width: 25%;
    height: 8%;
    
`

export const PlayButton = styled(BaseDiv)`
    position: relative;
    margin-top: 5%;

    width: 100%;
    height: 10%;

`
export const PlayText = styled(Text)`
    font-size: 15px;
`

export const TapesContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    width: 60%;
    height: 100%;

    filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.4));
`

export const Tape = styled.div`
    position: relative;
    margin: 2% 0%;
    
    width: 50vw;
    height: 20vh;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
    &:hover:active {
        opacity: 0.9;
    }

 `


//PANEL____________________________________
export const PanelContainer = styled.div`
    margin: 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

`

export const PanelBoxContainer = styled(Box1)`
    padding: 35px;
    
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 350px;
    height: 350px;

    filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.6));
`

export const Waves = styled.div`
    /* margin-top: 900px; */
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index:0;
    background-image: url("/waves.svg");
    background-position: 0% 1000%;
    opacity: 0.3;
`
