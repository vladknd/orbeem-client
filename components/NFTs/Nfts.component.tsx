import { useEffect, useState } from "react";
import { Box2 } from "../../styles/Components.styled";
import { 
    getNFTs, 
    INFT 
} from "../../web3/web3Utils";
import LoadingComponent from "../Loading/Loading.component";
import ItemComponent from "./Item.component";
import { Items, NftsContainer } from "./Nfts.styled";


interface INftsComponent {
    getNfts(): Promise<Array<INFT>>
}
const NftsComponent = (props: INftsComponent) => {
    //STATE____________________________________________________
    const [nfts, setNFTs] = useState<Array<INFT> | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    
    //FETCHING NFTs USING PROVIDED FUNCTION____________________
    useEffect(() => {
        props.getNfts().then((result) => {
            console.log("PROFILE-COMPONENT: GET-MY-NFTS RESULT", result)
            setNFTs(result)
            setLoading(false)
            console.log("PROFILE-COMPONENT: SET NFTs", nfts)
        })
    },[])

    //BODY______________________________________________________
    return (
        <NftsContainer mb={20} pb={40} jc="start">
            {loading ? <LoadingComponent/> : 
            <Items>
                {nfts?.map((item, index) => {
                    return (<ItemComponent
                        key={index}
                        id={item?.tokenId}
                        level={item?.level}
                        power={item?.power}
                        durability={item?.durability}
                        price={item?.price}
                        image={item?.imageURI}
                    />)
                })}
            </Items>}
        </NftsContainer>
    )
}

export default NftsComponent