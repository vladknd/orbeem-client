import { useEffect, useState } from "react";
import { Box2 } from "../../styles/Components.styled";
import { getNFTs, INFT } from "../../web3/web3Utils";
import LoadingComponent from "../Loading/Loading.component";
import ItemComponent from "./Item.component";
import { Items } from "./Nfts.styled";

interface INftsComponent {
    getNfts(): Promise<Array<INFT>>
}
const NftsComponent = (props: INftsComponent) => {
    interface INFT {
        name: string;
        description: string;
        tokenId: number;
        tokenURI: string;
        imageURI: string;

        level: number;
        power: number;
        durability: number;
    }
    const [nfts, setNFTs] = useState<Array<INFT> | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect(() => {
        props.getNfts().then((result) => {
            console.log("PROFILE-COMPONENT: GET-MY-NFTS RESULT", result);
            
            setNFTs(result)
            setLoading(false)
            console.log("PROFILE-COMPONENT: SET NFTs", nfts)
        })
    },[])
    return (
        <Box2  width={1400} mb={20} pb={50} jc="start">
            
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
        </Box2>
    )
}

export default NftsComponent