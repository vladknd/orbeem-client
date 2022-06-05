// import Market from '../ABI/Market'
// import DAI from '../ABI/DAI';

import { ethers } from 'ethers';
import { setCookies } from 'cookies-next';
import Router from 'next/router';
import NFTMarket from './ABI/NFTMarket.json'
import RuneNFT from './ABI/RuneNFT.json'

declare let window: any;
const vendorContract = "0x72B52c1D413CfDF585334352098a0ED49973836D"
const daiContract = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
const nftContract = "0xdFa29BcEd61051009Fe6e9DA7266999FC845bE19"
const marketContract = "0xee1c7F287c42C2771d7090421A1B1A32f33284C4"

import { URIs } from '../config';

//___________________INTERFACES_____________________________
export interface INFT {
    name: string;
    description: string;

    tokenId: number;
    tokenURI: string;
    imageURI: string;

    level: number;
    power: number;
    durability: number;

    price: string;
}

export interface INFTData {
    name: string;
    description: string;
    tokenId: number;
    itemId: number;
    tokenURI: string;
    image: string;

    owner: string;
    sold: boolean;
    price: string;

    level: number;

    basePower: number;
    baseDurability: number;

    power: number;
    durability: number;

}

//__________________________NFT_____________________________________
export const buyNFT = async (_itemID: number, _price: string) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const market = new ethers.Contract(marketContract, NFTMarket, signer)

        const options = {
            gasLimit: 3000000,
            value: ethers.utils.parseUnits(_price, 'wei')
        };    
                
        const tx = await market.createMarketSale(nftContract, _itemID, options)
        const txRes = await tx.wait()
        
        console.log("TX", tx)
        console.log("TX-RES", txRes)
    }
}

export const sellNFT = async (_tokenID: number, _price: number) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const market = new ethers.Contract(marketContract, NFTMarket, signer)

        const options = {
            gasLimit: 300000,
            value: ethers.utils.parseUnits('50000000000000000', 'wei')
        };    
                
        const tx = await market.createMarketItem(nftContract, _tokenID, _price, options)
        const txRes = await tx.wait()
        
        console.log("TX", tx)
        console.log("TX-RES", txRes)
    }
}

export const getMyNFTs = async (): Promise<Array<INFT>> => {
    console.log("GET-MY-NFTs PROCEDURE INITIATED..")
    
    const addr = await getAccount()
    const address = addr.toString()
    console.log("GET-MY-NFTs PROCEDURE: CURRENT ADDRESS", addr);

    console.log("LOGIN PROCEDURE: CHECK USER REQUEST")
    const getMyNFTsRes = await fetch(URIs.subgraphURI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    runes(first: 8, where: {owner: "${address}"}) {
                        tokenId
                        tokenURI
                        level
                        power
                        durability
                        price
                    }
                }
            `
        })
    })

    const getMyNFTsData = await getMyNFTsRes.json()
    const runes = getMyNFTsData.data.runes

    for (let i = 0; i < runes.length; i++){
        console.log("LOOP", runes[i].tokenURI);
        
        const res = await fetch(runes[i].tokenURI)
        const metadata = await res.json()
        console.log("METADATA", metadata)

        runes[i] = {...runes[i], 
            name: metadata.name,
            description: metadata.description,
            imageURI: metadata.image
        }
    }

    console.log("RUNES",runes)
    return runes
}

export const getNFTs = async (): Promise<Array<INFT>> => {
    console.log("GET-NFTs PROCEDURE INITIATED..")

    console.log("GET-NFTs PROCEDURE: GET NFTs REQUEST")
    const getNFTsRes = await fetch(URIs.subgraphURI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    runes(first: 8, where: {owner: "0x0000000000000000000000000000000000000000"}) {
                        tokenId
                        tokenURI
                        level
                        power
                        durability
                        price
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

    for (let i = 0; i < runes.length; i++){
        console.log("LOOP", runes[i].tokenURI);
        
        const res = await fetch(runes[i].tokenURI)
        const metadata = await res.json()
        console.log("METADATA", metadata)

        runes[i] = {...runes[i], 
            name: metadata.name,
            description: metadata.description,
            imageURI: metadata.image
        }
    }

    console.log("RUNES",runes)
    return runes
}

export const getNFTData = async (id: number): Promise<INFTData> => {
    console.log("GET-NFT-DATA PROCEDURE INITIATED..")

    console.log("GET-NFT-DATA PROCEDURE: ")
    const getNFTDataRes = await fetch(URIs.subgraphURI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    runes(where: {tokenId: ${Number(id)}}) {
                        tokenId
                        itemId
                        tokenURI
                        sold
                        owner
                        level
                        basePower
                        baseDurability
                        power 
                        durability
                        price
                    }
                }
            `
        })
    })

    const getNFTData = await getNFTDataRes.json()

    let NFT = getNFTData.data?.runes[0]
    const res = await fetch(NFT?.tokenURI)
    const metadata = await res.json()

    NFT = {...NFT, 
        name: metadata.name,
        description: metadata.description,
        image: metadata.image
    }
    console.log("NFTDATA", NFT)

    return NFT
}

export const levelUp = async (_tokenID: number) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const rune = new ethers.Contract(nftContract, RuneNFT, signer)

        const options = {
            gasLimit: 3000000,
        };    
                
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
    ) => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
                
        const rune = new ethers.Contract(nftContract, RuneNFT, signer)

        const options = {
            gasLimit: 3000000,
        };    
                
        const tx = await rune.updateAttributes(
            _tokenID, 
            _newPower,
            _newDurability,
            options
        )
        const txRes = await tx.wait()
        
        console.log("TX-updateAttributes", tx)
        console.log("TX-updateAttributes-RES", txRes)
    }
}

//___________________________UTILITIES_________________________________________
export const getAccount = async () => {
    const web3 = await checkMetaMask()
    const provider = new ethers.providers.Web3Provider(web3)
    await provider.send("eth_requestAccounts", []);
    const accounts = await provider.listAccounts()
    console.log("AVAILABLE ADDRESSES", accounts);
    
    return accounts[0]
}

export const checkMetaMask = async () => {
    let web3
    if(window.ethereum){
        // window.ethereum.request({ method: 'eth_requestAccounts' });
        web3 =  await window.ethereum 
        console.log("WEB3", web3)
        return web3
    } else if(window.web3){
        web3 = await window.web3.currentProvider
        console.log("WEB3", web3)
        return web3
    } else{
        console.log("NO METAMASK")
        alert("INSTALL METAMASK")
    }
}

export const signMessage = async (nonce: string, publicAddress: string) => {
    let web3
    if(window.ethereum){
        web3 =  await window.ethereum 
    } else if(window.web3){
        web3 = await window.web3.currentProvider
    } else{
        console.log("NO METAMASK")
    }
    const provider = new ethers.providers.Web3Provider(web3)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(`I am signing my one-time nonce: ${nonce}`)

    return { 
        publicAddress,
        signature
    }
}

export const checkAdmin = async () => {
    const addr = await getAccount()
    console.log("DONE", addr);
    if(addr === "0x16bD38012725eFEc123C31338Ab724573813e36C") return true
    return false
}
//-------------------------------------LOGIN--------------------------------------------------------
export const login = async () => {
    console.log("LOGIN PROCEDURE INITIATED..")
    
    const addr = await getAccount()
    console.log("LOGIN PROCEDURE: CURRENT ADDRESS", addr);

    console.log("LOGIN PROCEDURE: CHECK USER REQUEST")
    const checkUserRes = await fetch(`${URIs.apiURI}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query FindUser($publicAddress: String!) {
                    findUser(publicAddress: $publicAddress) {
                        publicAddress
                        nonce
                    }
                }
            `,
            variables: {
                publicAddress: addr
            }
        })
    })
    const checkUserData = await checkUserRes.json()
    console.log("LOGIN PROCEDURE: CHECK USER DATA", checkUserData);

    if(!checkUserData.data.findUser){
        console.log("LOGIN PROCEDURE: USER NOT FOUND")
        Router.push('/registration')
        throw new Error("USER DOES NOT EXIST")
    } else { 
        const { nonce, publicAddress } = checkUserData.data.findUser
        const sigMsg = await signMessage(nonce, publicAddress)
        console.log("LOGIN PROCEDURE: SIGNATURE",sigMsg)

        console.log("LOGIN PROCEDURE: USER VERIFICATION REQUEST")
        const verifyUserRes = await fetch(`${URIs.apiURI}/graphql`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `
                    mutation Login($publicAddress: String!, $signature: String!) {
                        login(publicAddress: $publicAddress, signature: $signature) {
                            token,
                            user {
                                publicAddress
                                firstName
                                surname
                                email
                            }
                        }
                    }
                `,
                variables: sigMsg
    
            })
        })
        const verifyUserData = await verifyUserRes.json()
        console.log("LOGIN PROCEDURE: VERIFY USER DATA", verifyUserData)

        const token = verifyUserData.data.login.token
        const user = verifyUserData.data.login.user
        console.log("LOGIN PROCEDURE:TOKEN", token);
        console.log("LOGIN PROCEDURE:USER", user);
        setCookies("jwt", token)
        console.log("LOGIN PROCEDURE: COOKIES SET")
        
        return user
    }
}



