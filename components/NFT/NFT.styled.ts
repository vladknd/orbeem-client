import styled from 'styled-components'
import colors from '../../styles/colors'
import { Box1, Box2, Button1, GlowText } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const NFTContainer = styled.div`
    margin-top: 5%;
    padding: 1%;
    display: flex;
    flex-direction: row;
    align-items: start;

    width: 100%;
    height: 95%;
`
export const NFTBadge = styled(Box2)`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 25%;
    height: 85vh;


    @media ${devices.laptopS} {
        
        /* height: 1000px; */
    }
    @media ${devices.laptopM} {
        /* width: 500px; */
        /* height: 1000px; */
    }
    @media ${devices.laptopL} {
        /* width: 600px; */
        /* height: 1000px; */
    }
`
export const LevelHeader = styled(GlowText)`
    /* font-size: 30px; */
    margin-top: 4%;
    font-size: 1.5vw;
    letter-spacing: 15px;
    text-align: center;
    height: 5%;
    width: 100%;

    /* @media ${devices.laptopS} {
        font-size: 15px;
    }
    @media ${devices.laptopM} {
        font-size: 25px;
    }
    @media ${devices.laptopL} {
        font-size: 25px;
    }
    @media ${devices.laptopXL} {
        font-size: 25px;
    } */

`
export const NFT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 100%;

`

export const AegisCollectionImage = styled.div`
    position: absolute;
    z-index: -1;
    right: 1px;
    bottom: 0px;

    width: 80%;
    height: 45%;

    background: radial-gradient(
        42.56% 46.88% at 57.44% 50.08%, 
        #0A090D 0%, 
        rgba(13, 13, 14, 0.32) 21.7%, 
        rgba(13, 13, 14, 0.35) 74.26%, 
        #0A090D 100%),url("/aegis.jpeg");
    background-size: cover;

`

export const NFTId = styled.div`
    margin: 2% 0%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 3%;
    background-color: rgba(240, 240, 240, 0.1);

    border-radius: 69px;

    color: white;
    font-size: 12px;
`


// interface INFTImage {
//     image: string;
// }
export const NFTImage = styled.div`
    position: relative;
    margin: 2%;
    border: 1px solid #494949;
    border-radius: 10px;

    
    width: 16vw;
    height: 35vh;
    
`

export const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 80%;
    height: 20%;
`
export const MetadataHeader = styled(GlowText)`
    margin: 20px 0px;

    font-size: 3vw;
    letter-spacing: 10px;
    align-self: center;

`
export const MetadataContainer = styled(Box2)`
    position: relative;
    margin: 0px 20px;
    padding: 10px 40px;
    width: 50vw;
    height: 85vh;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;



`

export const BuyButton = styled(Button1)`
    margin-bottom: 3%;
    width: 40%;
    height: 6%;
`