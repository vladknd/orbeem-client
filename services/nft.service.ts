declare let window: any
//________________________GLOBAL-IMPORTS__________________________
import { BigNumber, ethers } from 'ethers'
//________________________LOCAL-IMPORTS___________________________
//ABIs____________________________________________________________
import NFTMarket from '../ABI/NFTMarket.json'
import Rune from '../ABI/Rune.json'
import ORB from '../ABI/ORB.json'
//CONFIGS_________________________________________________________
import { 
    URIs,
    contracts 
} from '../config'
//INTERFACES______________________________________________________
import { INFT, INFTData } from '../interfaces/nft.interfaces'
//CONTRACTS_______________________________________________________


export const buyNFT = async (_itemID: number, _price: string) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const market = new ethers.Contract(contracts.marketContract, NFTMarket, signer)

        const options = {
            gasLimit: 3000000,
            value: ethers.utils.parseUnits(_price, 'wei')
        };    
                
        const tx = await market.createMarketSale(contracts.nftContract, _itemID, options)
        const txRes = await tx.wait()
        
        console.log("TX", tx)
        console.log("TX-RES", txRes)
    }
}

export const sellNFT = async (_tokenID: number, _price: string) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const market = new ethers.Contract(contracts.marketContract, NFTMarket, signer)
        const rune = new ethers.Contract(contracts.nftContract, Rune, signer)
        const options = {
            gasLimit: 300000,
            value: ethers.utils.parseUnits('50000000000000000', 'wei')
        };    
                
        await rune.approve(contracts.marketContract, _tokenID)
        const weiPrice = ethers.utils.parseEther(_price)
        const tx = await market.createMarketItem(contracts.nftContract, _tokenID, weiPrice, options)
        const txRes = await tx.wait()
        
        console.log("TX", tx)
        console.log("TX-RES", txRes)
    }
}

export const getMyNFTs = async (publicAddress: string, _offset: number): Promise<Array<INFT> | null> => {
    console.log("GET-MY-NFTs PROCEDURE INITIATED..")
  
    const address = publicAddress.toString()
    console.log("GET-MY-NFTs PROCEDURE: CURRENT ADDRESS", publicAddress);

    console.log("LOGIN PROCEDURE: CHECK USER REQUEST")
    const getMyNFTsRes = await fetch(`${URIs.subgraphURI}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    runes(first: 50, skip: ${_offset}, where: {owner: "${address}"}) {
                        tokenId
                        tokenURI
                        level
                        power
                        durability
                        intelligence
                        price
                        name 
                        description
                        image
                        
                    }
                }
            `
        })
    })

    const getMyNFTsData = await getMyNFTsRes.json()
    console.log(getMyNFTsData)
 
    return getMyNFTsData.data.runes
}

export const getNFTs = async (): Promise<Array<INFT>> => {
    console.log("GET-NFTs PROCEDURE INITIATED..")

    console.log("GET-NFTs PROCEDURE: GET NFTs REQUEST")
    const getNFTsRes = await fetch(`${URIs.subgraphURI}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    runes(first: 50, where: {owner: "0x0000000000000000000000000000000000000000"}) {
                        tokenId
                        tokenURI
                        level
                        power
                        durability
                        intelligence
                        price
                        image
                    }
                }
            `
        })
    })
    console.log("GET-NFTs-RES", getNFTsRes);
    
    const getNFTsData = await getNFTsRes.json()
    console.log("GET-NFTs-DATA", getNFTsData);

    const runes = getNFTsData.data.runes
    console.log("GET-NFTs-RUNES", runes);

    // for (let i = 0; i < runes.length; i++){
    //     console.log("LOOP", runes[i].tokenURI);
        
    //     const res = await fetch(runes[i].tokenURI)
    //     const metadata = await res.json()
    //     console.log("METADATA", metadata)

    //     runes[i] = {...runes[i], 
    //         name: metadata.name,
    //         description: metadata.description,
    //         imageURI: metadata.image
    //     }
    // }

    console.log("RUNES",runes)
    return runes
}

export const getNFTData = async (id: number): Promise<INFTData> => {
    console.log("GET-NFT-DATA PROCEDURE INITIATED..")

    console.log("GET-NFT-DATA PROCEDURE: ")
    const getNFTDataRes = await fetch(`${URIs.subgraphURI}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    runes(where: {tokenId: ${id}} ) {
                        tokenId
                        itemId
                        tokenURI
                        sold
                        owner
                        level
                        basePower
                        baseDurability
                        baseIntelligence
                        power 
                        durability
                        intelligence
                        price

                        image 
                        name 
                        description
                    }
                }
            `
        })
    })

    const getNFTData = await getNFTDataRes.json()

    // let NFT = getNFTData.data?.runes[0]
    // const res = await fetch(NFT?.tokenURI)
    // const metadata = await res.json()

    // NFT = {...NFT, 
    //     name: metadata.name,
    //     description: metadata.description,
    //     image: metadata.image
    // }
    console.log("NFTDATA", getNFTData)

    return getNFTData.data.runes[0]
}

export const levelUp = async (_tokenID: number) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const rune = new ethers.Contract(contracts.nftContract, Rune, signer)
        const orb = new ethers.Contract(contracts.orbContract, ORB, signer)
        const options = {
            gasLimit: 3000000,
        };    
        await orb.approve(rune.address, BigNumber.from("10000000000000000000"));
        const tx = await rune.levelUp(_tokenID, options)
        const txRes = await tx.wait()
        
        console.log("TX", tx)
        console.log("TX-RES", txRes)
    }
}

export const upgradeNFT = async (
    _tokenID: number, 
    _newPower: number,
    _newDurability: number,
    _newIntelligence: number
    ) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const rune = new ethers.Contract(contracts.nftContract, Rune, signer)

        const options = {
            gasLimit: 3000000,
        };    
                
        const tx = await rune.updateAttributes(
            _tokenID, 
            _newPower,
            _newDurability,
            _newIntelligence,
            options
        )
        const txRes = await tx.wait()
        
        console.log("TX-updateAttributes", tx)
        console.log("TX-updateAttributes-RES", txRes)
    }
}