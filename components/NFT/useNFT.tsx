import React, { useContext } from 'react'
import { INFTData } from '../../web3/web3Utils'

// interface INFT {
//     tokenId: string;
//     email: string;
//     firstName: string;
//     surname: string;
//     publicAddress: string;
//     steamId: string;
// }

interface INFTContext  {
  nft: INFTData | null;
  setNFTData(nft: INFTData): void;
}
const NFTContextDefault = {
  nft: null,
  setNFTData: () => {}
}



export const NFTContext = React.createContext<INFTContext>(NFTContextDefault)

export const NFTProvider = (props: any) => {
  const [nftState, setNftState] = React.useState<INFTData | null>(null)

  const setNFTData = (nft: INFTData) => {
    setNftState({
        name: nft.name,
        description: nft.description,
        tokenId: nft.tokenId,
        itemId: nft.itemId,
        tokenURI: nft.tokenURI,
        image: nft.image,
    
        owner: nft.owner,
        sold: nft.sold,
        price: nft.price,
        
        level: nft.level,
        power: nft.power,
        durability: nft.durability

    })
    
  }

  const value = {
    nft: nftState,
    setNFTData,
  }

  return (
    <NFTContext.Provider value={value}>
     {props.children}
    </NFTContext.Provider>
  )
}
  
export const useNFT = () => {
  return useContext(NFTContext)
}