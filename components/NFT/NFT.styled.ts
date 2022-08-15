import styled from 'styled-components'
import colors from '../../styles/colors'
import { Box1, Box2, Button1, GlowText } from '../../styles/Components.styled'
import devices from '../../styles/devices'

export const NFTContainer = styled.div`
    margin-top: 6%;
    padding: 1%;
    display: flex;
    flex-direction: row;
    align-items: start;

    width: 100%;
    height: 100vh;
`
export const NFTBadge = styled(Box2)`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 30%;
    height: 700px;

    @media ${devices.laptopXS} {
        width: 22%;
        height: 85vh;
    }
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

export const NFT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 100%;

`

export const NFTId = styled.div`
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 22px;
    background-color: rgba(240, 240, 240, 0.1);

    border-radius: 69px;

    color: white;
    font-size: 12px;
`


interface INFTImage {
    image: string;
}
export const NFTImage = styled.div`
    /* width: 400px;
    height: 500px; */
    
    border: 1px solid white;

    background-image: ${(props: INFTImage) => `url("${props.image}")`};
    background-position: center;
    background-size: cover;
    
    @media ${devices.laptopXS} {
        width: 150px;
        height: 150px;
    }
    @media ${devices.laptopS} {
        width: 170px;
        height: 180px;
    }
    @media ${devices.laptopM} {
        width: 200px;
        height: 200px;
    }
    @media ${devices.laptopL} {
        width: 240px;
        height: 240px;
    }
    @media ${devices.laptopXL} {
        width: 260px;
        height: 260px;
    }
    @media ${devices.laptopXXL} {
        width: 280px;
        height: 280px;
    }
`
export const MetadataHeader = styled(GlowText)`
    margin: 5px 0px;
    font-size: 40px;
    align-self: center;
`
export const MetadataContainer = styled(Box1)`
    margin: 0px 20px;
    padding: 10px;
    width: 800px;
    height: 100%;

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