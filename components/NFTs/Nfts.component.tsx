import Image from 'next/image'
//_______________LOCAL-IMPORTS____________________
//STYLED-COMPONENTS_______________________________
import { Items } from './Nfts.styled'
//COMPONENTS______________________________________
import LoadingComponent from "../Loading/Loading.component"
import ItemComponent from "../Common/Item.component"
//WEB3____________________________________________
import { INFT, NFT, IAegis } from '../../interfaces/nft.interfaces'
import { URIs } from '../../config'
import { useEffect } from 'react'
import { ethers } from 'ethers'


//NFTs-COMPONENT____________________________________________________________________________________________________________
interface INftsComponent {
    items: Array<NFT>;
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
        <Items cols={props.gridSize}>
            {props.items.map((item, index) => {
                // console.log("https://"+item?.image.slice(0,59)+URIs.ipfsGateway+item?.image.slice(59));
                console.log("TYPE", item.image);
                return (    
                    <ItemComponent
                        key={index}
                        mode={props.mode}
                        id={item?.tokenId}
                        nftAddress={item?.nftAddress}
                        level={item?.level}
                        power={"power" in item ? item.power : null}
                        durability={"durability" in item ? item?.durability : null}
                        intelligence={"intelligence" in item ? item?.intelligence : null}
                        price={item.price ? ethers.utils.formatEther(item.price) : "0"}
                        image={"https://"+item?.image.slice(0,59)+URIs.ipfsGateway+item?.image.slice(59)}
                    />
                )
            })}
        </Items>
    )
}

export default NftsComponent
//_________________________________________________________________________________________________________________________

// const str = "ipfs://bafybeiadce7qqwypl2yen2zqg5c2wx54xq3te2x2r5z7pielw3uybm773q/1.jpg"
// console.log("AA", "https://"+str.slice(7,59)+'.ipfs.nftstorage.link'+str.slice(59))