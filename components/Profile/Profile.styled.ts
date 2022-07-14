import styled from 'styled-components'
import colors from '../../styles/colors'
import { Box1 } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const ProfileContainer = styled.div`
    margin-top: 14vh;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    
    width: 100%;

    height: 90vh;
    
`

export const Navigator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    
    transition: height 10s;
    color: white;
    font-size: 30px;

    background-color: ${colors.container_bg};
`

export const NavigatorContainer = styled.div`
    /* margin-top: 100px; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;

    transition: 1s;
    background-color: ${colors.container_bg};

    @media ${devices.laptopXS} {
        height: 10vh;
    }
    @media ${devices.laptopS} {
        height: 10vh;
    }
    @media ${devices.laptopM} {
        height: 10vh;
    }
    @media ${devices.laptopL} {
        height: 10vh;
    }
`

export const SignedContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100%;
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

export const ContentContainer = styled.div`
    margin-top: 2%;
    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    align-items: start;
    
    width: 100%;
    height: 100%;
`

export const NFTFilters = styled(Box1)`
    margin-right: 20px;
    width: 30%;
    height: 95%;
`