import styled from 'styled-components'
import colors from '../../styles/colors'
import devices from '../../styles/devices'

export const HeaderContainer = styled.div`
    z-index: 5;
    position: fixed;
    padding: 0% 1% 0% 1%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 10vh;

    color: white;
    background-color: ${colors.header_bg};
`

export const LogoContainer = styled.div`
    position: relative;
    /* margin-left: 10%; */

    width: 10vw;
    height: 90%;

`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    /* width: 10%; */
    height: 100%;

    margin: 0px 20px;
`

export const LinkContainer = styled.a`
    margin: 0 1vw;

    font-size: 1vw;
    letter-spacing: 0.155em;
    color: white;

    &:hover {
        background: -webkit-linear-gradient(90.89deg, #416CCA -1.34%, #7852CB 118.01%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    
`

export const AccountContainer = styled.div`
    padding: 0px 15px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    
    /* width: 32vw; */
    height: 55%;
    
    border-radius: 25vw;
    background-color: rgba(112, 112, 112, 0.24);

    color: white;
    font-size: 0.8vw;
    font-family: Inter;
    font-weight: 300;
    white-space: nowrap;
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

`

export const MetamaskLogo = styled.div`
    position: relative;
    margin: 0px 10px 0px 0px;
    width: 3vh;
    height: 3vh;
    /* display: block; */
`