import styled from 'styled-components'
import { BaseDiv, Text } from '../../styles/Components.styled'

export const FooterContainer = styled.div`
    padding: 2% 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    self-align: end;
    width: 100%;
    height: 38%;
    z-index: 4;
    background-color: black;

`
export const FooterContent = styled.div`
    /* padding: 0% 10%; */

    /* align-self: start; */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;

    width: 80%;
`
export const LogoContainer = styled.div`
    margin-left: 20px;
`

export const SocialMedias = styled.div`
    margin-top: 2% ;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
`

export const IconContainer = styled.div`
    margin: 0px 10px;
    &:hover {
        opacity: 0.5;
    }
`

export const FooterLine = styled.div`
    margin-top: 20px;
    width: 80%;
    height: 0.1px;
    background-color: white;
`
export const FooterCopyrights = styled(Text)`
    font-size: 12px;
    font-weight: 200;
`   

// export const LinkStack = styled.div`
//     margin-left: 5%;

//     display: flex;
//     flex-direction: column;
//     justify-content: start;
//     align-items: start;
// `

// export const FooterHeaderLink = styled(BaseDiv)`
//     margin-bottom: 20px;

//     font-family: Inter;
//     font-weight: 200;
//     font-size: 18px;

//     letter-spacing: 5px;
//     color: white;
// `

// export const FooterLink = styled(BaseDiv)`
//     font-family: Inter;
//     font-weight: 200;
//     font-size: 15px;

//     letter-spacing: 3px;
//     opacity: 0.8;
//     color: white;
// `