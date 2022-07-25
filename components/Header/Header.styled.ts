import styled from 'styled-components'
import colors from '../../styles/colors'
import devices from '../../styles/devices'

export const HeaderContainer = styled.div`
    z-index: 5;
    position: fixed;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    
    
    

    color: white;
    background-color: ${colors.header_bg};

    @media ${devices.laptopXS} {
        height: 12vh;
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

export const LogoContainer = styled.div`
    margin: 0px 20px;

    

`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 1100px;
    height: 10px;

    margin: 0px 20px;
`

export const LinkContainer = styled.a`
    margin: 0px 15px;

    letter-spacing: 0.155em;
    /* font-size: 13px; */
    color: white;

    &:hover {
        background: -webkit-linear-gradient(90.89deg, #416CCA -1.34%, #7852CB 118.01%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media ${devices.laptopXS} {
        font-size: 11px;
    }
    @media ${devices.laptopS} {
        font-size: 14px;
    }
    @media ${devices.laptopM} {
        font-size: 14px;
    }
    @media ${devices.laptopL} {
        font-size: 16px;
    }
`

export const AccountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    
    width: 1500px;
    height: 40px;
    padding: 0px 15px;
    border-radius: 25px;
    background-color: rgba(112, 112, 112, 0.24);

    color: white;
    font-size: 16px;
    font-family: Inter;
    font-weight: 300;
    letter-spacing: 2.5px;
    text-align: center;
    
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #6d52d1;
        background-color: rgba(112, 112, 112, 0.14);
        cursor: pointer;
    }
    &:hover:active {
        opacity: 0.9;
    }

    @media ${devices.laptopXS} {
        font-size: 13px;
    }
    @media ${devices.laptopS} {
        font-size: 13px;
    }
    @media ${devices.laptopM} {
    }
    @media ${devices.laptopL} {

    }
`

export const MetamaskLogo = styled.div`
    margin: 0px 10px 0px 0px;
    /* width: 100%; */
    /* height: 100%; */
    /* display: block; */
`