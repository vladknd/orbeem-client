import styled from 'styled-components'

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;

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

    height: 100vh;
`

interface ILogoContainer {
    auth: boolean;
}
export const LogoContainer = styled.div`
    filter: ${(props: ILogoContainer) => props.auth ? "drop-shadow(3px -3px 31px #8952FF)" : "none"};
    margin-top: 50px;
    margin-left: 100px;
`

export const TapesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
`

export const Tape = styled.div`
    margin: 30px 0px 3px 0px;

    &:hover {
        opacity: 0.8;
    }
`

export const PanelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    height: 100%;

`