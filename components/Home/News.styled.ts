import Image from 'next/image'
import styled from 'styled-components'
import { 
    Box1, 
    Box2, 
    Button2, 
    GlowText, 
    Text
} from '../../styles/Components.styled'

//________________NEWS-COMPONENT_____________________
export const NewsContainer = styled(Box1)`
    margin: 4%;
    padding-bottom: 3%;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 85vh;
`

export const NewsHeader = styled(GlowText)`
    font-size: 2.2em;
` 


//___________________NEWS-ITEM________________________
export const NewsItemContainer = styled(Box2)`
    position: relative;

    padding: 3%;
    
    display: flex;
    flex-direction: column;

    width: 90%;
    height: 80%;
`

export const NewsItemHeader = styled(Text)`
    font-size: 1.7em;
    line-height: 130%;
    letter-spacing: 8px;
`

export const NewsItemText = styled(Text)`
    padding-top: 1%;
    padding-left: 10px;
    font-size: 1em;
    opacity: 0.6;
    
`

export const NewsItemImage = styled.div`
    position: absolute;
    z-index: -1;
    right: 1px;
    bottom: 1px;

    width: 50%;
    height: 60%;
    /* background: radial-gradient(
        42.56% 46.88% at 57.44% 50.08%, 
        #0A090D 0%, 
        rgba(13, 13, 14, 0.32) 21.7%, 
        rgba(13, 13, 14, 0.35) 74.26%, 
        #0A090D 100%),
        url(aegis.jpg); */
    background: radial-gradient(
        42.56% 46.88% at 57.44% 50.08%, 
        #0A090D 0%, 
        rgba(13, 13, 14, 0.32) 21.7%, 
        rgba(13, 13, 14, 0.35) 74.26%, 
        #0A090D 100%),url("aegis.jpeg");
    background-size: cover;
    
`

export const NewsItemButton = styled(Button2)`
    position: absolute;
    bottom: 20%;
    left: 6%;
    width: 18%;
    height: 10%;
`

export const NewsItemDate = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;


`

export const NewsDateText = styled(Text)`
    margin-top: 0.5%;
    margin-left: 10px;

    font-size: 15px;

    opacity: 0.85;
    /* width: 10%; */
    /* margin: 0; */
`