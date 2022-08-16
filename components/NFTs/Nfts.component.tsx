import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { Items, NftsContainer } from './Nfts.styled'
//COMPONENTS______________________________________
import LoadingComponent from "../Loading/Loading.component"
import ItemComponent from "../Common/Item.component"
//WEB3____________________________________________
import { INFT } from '../../interfaces/nft.interfaces'
import { URIs } from '../../config'
import { useEffect } from 'react'
import { Button1 } from '../../styles/Components.styled'
import { ethers } from 'ethers'


//NFTs-COMPONENT____________________________________________________________________________________________________________
interface INftsComponent {
    items: INFT[] | null;
    loading: boolean;
    gridSize: string;
    mode: string;
}
const NftsComponent = (props: INftsComponent) => {
    useEffect(()=> {
        console.log("HHHHHHHHHHHH",props.items);
        
    }, [])
    //BODY__________________________________________________________________________________________________________________
    return (
        <NftsContainer mb={20} mr={30} ml={30} pb="40px" jc={props.loading ? "center" : "start"} al="center">
            {props.loading ? <LoadingComponent/> : 
            props.items ? 
            <Items cols={props.gridSize}>
                {props.items.map((item, index) => {
                    console.log("https://"+item?.image.slice(0,59)+URIs.ipfsGateway+item?.image.slice(59));
                    return (
                        <ItemComponent
                            key={index}
                            mode={props.mode}
                            id={item?.tokenId}
                            level={item?.level}
                            power={item?.power}
                            durability={item?.durability}
                            intelligence={item?.intelligence}
                            price={item.price ? ethers.utils.formatEther(item.price) : "0"}
                            image={"https://"+item?.image.slice(0,59)+URIs.ipfsGateway+item?.image.slice(59)}
                        />
                    )
                })}
            </Items>
            
            : null}
        </NftsContainer>
    )
}

export default NftsComponent
//_________________________________________________________________________________________________________________________

// const str = "ipfs://bafybeiadce7qqwypl2yen2zqg5c2wx54xq3te2x2r5z7pielw3uybm773q/1.jpg"
// console.log("AA", "https://"+str.slice(7,59)+'.ipfs.nftstorage.link'+str.slice(59))