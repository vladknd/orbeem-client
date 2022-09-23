import styled from "styled-components";
import colors from "../../styles/colors";
import { Button1, GlowText, Text } from "../../styles/Components.styled";
import devices from "../../styles/devices";

export const NavigatorHeader = styled(GlowText)`
    font-size: 35px;
`
export const NavigatorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 85%;
    /* max-height: ; */

    transition: 1s;
    background-color: ${colors.box1_bg};
    filter: drop-shadow(10px 20px 30px rgba(0, 0, 0, 0.4));

    border-width: 1px 0px;
    border-style: solid;
    border-color: #FFBB00;
`

export const SignedContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* height: 5%; */
    width: 100%;
`

export const AccountContainer = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
`

interface IAvatarContainer {
    image: string;
}
export const AvatarContainer = styled.div`
    margin-right: 10px;
    width: 50px;
    height: 50px;

    border-radius: 50px;

    background-image: ${(props: IAvatarContainer) => `url(${props.image})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: drop-shadow(0px 8px 8px #000000);
`

export const UsernameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: rgba(139, 139, 139, 0.27);
    color: white;
    width: 200px;
    height: 35px;

    border-radius: 20px;

    @media ${devices.laptopXS} {
        font-size: 13px;
    }
    @media ${devices.laptopS} {
        font-size: 13px;
    }
    @media ${devices.laptopM} {
        font-size: 15px;
    }
    @media ${devices.laptopL} {
        font-size: 20px;
    }
`
export const UnsignedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    width: 100%;

`

export const Links = styled.div`
    /* margin-right: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LinkContainer = styled.div`
    margin: 0px 15px;

    letter-spacing: 0.155em;
    color: white;

    &:hover {
        background: -webkit-linear-gradient(90.89deg, #416CCA -1.34%, #7852CB 118.01%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media ${devices.laptopXS} {
        font-size: 13px;
    }
    @media ${devices.laptopS} {
        font-size: 15px;
    }
    @media ${devices.laptopM} {
        font-size: 16px;
    }
    @media ${devices.laptopL} {
        font-size: 17px;
    }
    
`
export const GlowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const VerifyButton = styled(Button1)`
    margin: 50px 0px;
    width: 10%;
    height: 8%;
`

export const VerifyText = styled(Text)`
    margin-top: 1%;
    padding: 0% 20%;

    font-family: Inter;
    font-weight: 200;
    opacity: 0.8;
    @media ${devices.laptopXS} {
        font-size: 13px;
    }
    @media ${devices.laptopS} {
        font-size: 15px;
    }
    @media ${devices.laptopM} {
        font-size: 16px;
    }
    @media ${devices.laptopL} {
        font-size: 17px;
    }
`