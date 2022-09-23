declare let window: any
//________________________GLOBAL-IMPORTS__________________________
import { BigNumber, ethers } from 'ethers'
//________________________LOCAL-IMPORTS___________________________
//ABIs____________________________________________________________
import NFTMarket from '../ABI/NFTMarket.json'
import Aegis from '../ABI/Aegis.json'
import Rune from '../ABI/Rune.json'
import ORB from '../ABI/ORB.json'
//CONFIGS_________________________________________________________
import { 
    URIs,
    contracts 
} from '../config'
//INTERFACES______________________________________________________
import { INFT, NFT } from '../interfaces/nft.interfaces'
//CONTRACTS_______________________________________________________


export const buyNFT = async (_itemID: number, _nftContract: string, _price: string) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const market = new ethers.Contract(contracts.marketContract, NFTMarket, signer)

        const options = {
            gasLimit: 3000000,
            value: ethers.utils.parseUnits(_price, 'wei')
        };    
        
        const tx = await market.createMarketSale(_nftContract, _itemID, options)
        const txRes = await tx.wait()
        
        console.log("TX", tx)
        console.log("TX-RES", txRes)
    }
}

export const sellNFT = async (_tokenID: number, _nftContract: string, _price: string) => {
    if(typeof window.ethereum !== "undefined"){
        console.log({_tokenID, _nftContract, _price});
        
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const market = new ethers.Contract(contracts.marketContract, NFTMarket, signer)
        switch (_nftContract) {
            case contracts.aegisContract:
                const aegis = new ethers.Contract(_nftContract, Aegis, signer)
                await aegis.approve(contracts.marketContract, _tokenID)
            case contracts.runeContract:
                const creeper = new ethers.Contract(_nftContract, Rune, signer)
                await creeper.approve(contracts.marketContract, _tokenID)
        }
        
        const options = {
            gasLimit: 300000,
            value: ethers.utils.parseUnits('50000000000000000', 'wei')
        };    
                
        
        const weiPrice = ethers.utils.parseEther(_price)
        const tx = await market.createMarketItem(_nftContract, _tokenID, weiPrice, options)
        const txRes = await tx.wait()
        
        console.log("TX", tx)
        console.log("TX-RES", txRes)
    }
}

export const getMyNFTs = async (_publicAddress: string, _offset: number): Promise<Array<NFT> | null> => {
    console.log("GET-MY-NFTs PROCEDURE INITIATED..")
  
    const address = _publicAddress.toString()
    console.log("GET-MY-NFTs PROCEDURE: CURRENT ADDRESS", _publicAddress);

    // console.log("LOGIN PROCEDURE: CHECK USER REQUEST")
    const getMyNFTsRes = await fetch(`${URIs.subgraphURI}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({  
            query:`
                query Nfts($where: NFT_filter, $first: Int) {
                    nfts(where: $where, first: $first) {
                    id
                    tokenId
                    itemId
                    level
                    price
                    owner
                    nftAddress
                    image
                    __typename
                    game {
                        name
                    }
                    collection {
                        name
                    }
                    owner
                    ...on Aegis {
                        power 
                        durability
                        intelligence

                        basePower
                        baseDurability
                        baseIntelligence
                    }
                    }
                }
            `,
            variables: {
                "where": {
                    "owner": _publicAddress
                },
                "first": 20
            }
        })
    })

    const getMyNFTsData = await getMyNFTsRes.json()
    console.log("GET-MY-NFTs PROCEDURE: DATA", getMyNFTsData);
    console.log(getMyNFTsData)
 
    return getMyNFTsData.data.nfts
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

    console.log("RUNES",runes)
    return runes
}

export const getNFTData = async (_tokenId: string, _nftAddress: string): Promise<NFT> => {
    console.log("GET-NFT-DATA PROCEDURE INITIATED..")
    console.log({_tokenId, _nftAddress});
    
    console.log("GET-NFT-DATA PROCEDURE: ")
    const getNFTDataRes = await fetch(`${URIs.subgraphURI}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
            query Nfts($where: NFT_filter) {
                nfts(where: $where) {
                    __typename
                    tokenId             
                    nftAddress
                    itemId
                    sold
                    owner
                    level
                    ...on Aegis {
                        basePower
                        baseDurability
                        baseIntelligence
                        power 
                        durability
                        intelligence
                    }
                    price
                    image 
                    name 
                    description
                }
            }
            `,
            variables: {
                "where": {
                    "nftAddress": _nftAddress,
                    "tokenId": _tokenId,
                }
            }
        })
    })

    const getNFTData = await getNFTDataRes.json()
    console.log("NFTDATA", getNFTData)

    return getNFTData.data.nfts[0]
}

export const levelAegis = async (_tokenID: number) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const rune = new ethers.Contract(contracts.aegisContract, Rune, signer)
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

export const upgradeAegis = async (
    _tokenID: number, 
    _newPower: number,
    _newDurability: number,
    _newIntelligence: number
    ) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const aegis = new ethers.Contract(contracts.aegisContract, Aegis, signer)
        const options = {
            gasLimit: 3000000,
        };    
                
        const tx = await aegis.updateAttributes(
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