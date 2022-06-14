import React, { useContext } from 'react'
import { INFTData } from '../../web3/web3Utils'

interface INFTState extends INFTData{
  upgrading?: boolean;
}

interface INFTContext  {
  nft: INFTState | null;
  setNFTData(nft: INFTData): void;
  incrementPower(): void;
  incrementDurability(): void;
  setUpgrade(): void;
}


const NFTContextDefault = {
  nft: null,
  setNFTData: () => {},
  incrementPower: () => {},
  incrementDurability: () => {},
  setUpgrade: () => {}
}
export const NFTContext = React.createContext<INFTContext>(NFTContextDefault)

export const NFTProvider = (props: any) => {
  const [nftState, setNftState] = React.useState<INFTState | null>(null)
  
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

        basePower: nft.basePower,
        baseDurability: nft.baseDurability,

        power: nft.power,
        durability: nft.durability,

        //CLIEN STATE:
        upgrading: false
    })
  }

  const incrementPower = () => {
    if(nftState){
      const baseTotal = nftState.basePower + nftState.baseDurability
      const total = nftState.power + nftState.durability
      console.log("BASE TOTAL", baseTotal);
      console.log("ALLOWANCE", baseTotal + nftState.level*4);
      console.log("NFT INCR", nftState);
      
      if(total < baseTotal + nftState.level*4){
        console.log("HOLDS");
        setNftState(() => {
          return Object.assign({}, nftState, {power: nftState.power++})
        })
      }
      else {
        console.log("DOES NOT HOLD")
        setNftState(() => {
          return Object.assign({}, nftState)
        })
      }
    }   
  }

  const incrementDurability = () => {
    if(nftState){
      const baseTotal = nftState.basePower + nftState.baseDurability
      const total = nftState.power + nftState.durability
      if(total < baseTotal + nftState.level*4){
        setNftState(() => {
            return Object.assign({}, nftState, {durability: nftState.durability++})
        })
      }
      else {
        setNftState(() => {
          return Object.assign({}, nftState)
        })
      }
    }   
  }

  const setUpgrade = () => {
    if(nftState){
      setNftState(() => {
        return Object.assign({}, nftState, {upgrading: !nftState.upgrading})
      })
    }
  }

  const value = {
    nft: nftState,
    setNFTData,
    incrementPower,
    incrementDurability,
    setUpgrade
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