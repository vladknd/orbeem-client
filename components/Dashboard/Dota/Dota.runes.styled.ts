import styled from "styled-components";
import { Button1, GlowText, Text } from "../../../styles/Components.styled";
import devices from "../../../styles/devices";

export const AegisContainer = styled.div`
    /* margin: 0px 40px; */

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100%;
`
export const Attributes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 40%;
`
interface IAegisImage {
  img: string;
}
export const AegisImage = styled.div`
    /* width: 400px;
    height: 400px; */
    margin-bottom: 10px;
    

    background-image: ${(props: IAegisImage) => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: cover;

    height: 48%;
    width: 48%;
    border-radius: 10px;
    border: solid 1px #494949;
    
`

export const Claim = styled(Button1)`
    margin: 10px 0px;
    width: 30%;
    height: 10%;

    font-size: 1vw;
`

export const Header = styled(GlowText)`
    margin: 10px 0px;
    text-shadow: 0px 0px 6px rgba(29, 172, 255, 0.615), 0px 0px 33px #B04BFF;
    font-size: 1.5vw;
    /* @media ${devices.laptopS} {
        font-size: 18px;
    }
    @media ${devices.laptopM} {
        font-size: 18px;
    }
    @media ${devices.laptopL} {
        font-size: 18px;
    }
    @media ${devices.laptopXL} {
        font-size: 25px;
    } */
`

export const ChargeText = styled(GlowText)`
    text-shadow: 0px 0px 6px rgb(0, 255, 123), 0px 0px 33px #37be0e;
    
    @media ${devices.laptopS} {
        font-size: 15px;
    }
    @media ${devices.laptopM} {
        font-size: 15px;
    }
    @media ${devices.laptopL} {
        font-size: 15px;
    }
    @media ${devices.laptopXL} {
        font-size: 22px;
    }
`

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100%;
`

export const GameText = styled(GlowText)`


`

export const Minter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;

    width: 100%;
    height: 40%;
`
export const Mint = styled(Button1)`
    margin: 10px 0px;
    width: 30%;
    height: 25%;
`

export const ErrorImage = styled.div`
    margin: 2% 0% 0% 0%;

    display: flex;
    justify-content: center;
    aling-items: center;

    width: 100%;
    height: 100%;
`
export const ErrorDischarged = styled(Text)`
    margin-bottom: 5%;
    font-size: 12px;
`
export const NFTErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
`

export const SuccessImage = styled.div`
    margin: 2% 0% 0% 0%;

    display: flex;
    justify-content: center;
    aling-items: center;

    width: 100%;
    height: 100%;
`
export const Success = styled(Text)`
    margin-bottom: 5%;
    font-size: 12px;
    width: 80%;
    text-align: center;
`
export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 100%;
`
export const SuccessDone = styled(Button1)`
    margin-bottom: 20px;
    border-radius: 10px;
    width: 30%;
    height: 15%;
    font-size: 12px;
`