
import { ethers } from 'ethers';
import { setCookies } from 'cookies-next';
import Router from 'next/router';
import NFTMarket from './ABI/NFTMarket.json'
import RuneNFT from './ABI/RuneNFT.json'
import ORB from './ABI/ORB.json'

declare let window: any;
const vendorContract = "0x72B52c1D413CfDF585334352098a0ED49973836D"
const daiContract = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
// const nftContract = "0xdFa29BcEd61051009Fe6e9DA7266999FC845bE19"
// const marketContract = "0xee1c7F287c42C2771d7090421A1B1A32f33284C4"

//PROXIES
const nftContract = "0x900C13Dbf7894c397395C2fCA7cAC9B6e6fF69E5"
const marketContract = "0xA615D54A9B1bEC1265A23f4166b5e549023F4C81"
const orbContract = "0x7758b8A26c2b63020520C4261D1dc2c41E7DeCf4"

import { URIs } from '../config';
import { useWeb3 } from '../services/web3.service';


//___________________TOKEN_____________________________
export const getBalance = async (_address: string) => {
    console.log("GOT ADDRESS", _address);
    const web3 = await checkMetaMask()
    const provider = new ethers.providers.Web3Provider(web3)
    const balance = await provider.getBalance(_address)

    return ethers.utils.formatEther(balance)
}

export const getORBBalance = async (_address: string) => {
    console.log("GOT ADDRESS", _address);
    const web3 = await checkMetaMask()
    const provider = new ethers.providers.Web3Provider(web3)
    const signer = provider.getSigner()

    const orb = new ethers.Contract(orbContract, ORB, signer) 
    const balance = await orb.balanceOf(_address)

    return ethers.utils.formatUnits(balance, 10)
}

//__________________________NFT_____________________________________
export interface INFT {
    name: string;
    description: string;

    tokenId: number;
    tokenURI: string;
    imageURI: string;

    level: number;
    power: number;
    durability: number;
    intelligence: number;

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
    baseIntelligence: number;

    power: number;
    durability: number;
    intelligence: number;
}


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

export const getMyNFTs = async (publicAddress: string): Promise<Array<INFT> | null> => {
    console.log("GET-MY-NFTs PROCEDURE INITIATED..")
    
    // const addr = await getAccount()
    // const {publicAddress} = await useWeb3()
    // const publicAddress = "0x83799E98349124b3b30D9D9635bD66A381f22f24"
    
        
    const address = publicAddress.toString()
    console.log("GET-MY-NFTs PROCEDURE: CURRENT ADDRESS", publicAddress);

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
                        intelligence
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
                        intelligence
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
                        baseIntelligence
                        power 
                        durability
                        intelligence
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
    _newIntelligence: number
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
            _newIntelligence,
            options
        )
        const txRes = await tx.wait()
        
        console.log("TX-updateAttributes", tx)
        console.log("TX-updateAttributes-RES", txRes)
    }
}

//___________________________UTILITIES_________________________________________
interface IConnectRes {
    chainId: number;
    address: string;
}
export const connect = async (): Promise<IConnectRes> => {
    const web3 = await checkMetaMask()
    const provider = new ethers.providers.Web3Provider(web3)
    // await provider.send("eth_requestAccounts", []);  
    const signer = provider.getSigner();
    const { chainId } = await provider.getNetwork()
    const address = await signer.getAddress()
    // const accounts = await provider.listAccounts()

    console.log("CURENT WEB3 ADDRESSE", address);
    console.log("CURENT WEB3 CHAIN-ID", chainId);
    
    return {
        chainId,
        address
    }
}

export const linkMetamask = async () => {
    const web3 = await checkMetaMask()
    const provider = new ethers.providers.Web3Provider(web3)
    // const signer = provider.getSigner();
    await provider.send("eth_requestAccounts", []);
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
    const {address} = await connect()
    console.log("DONE", address);
    if(address === "0x16bD38012725eFEc123C31338Ab724573813e36C") return true
    return false
}
//-------------------------------------LOGIN--------------------------------------------------------
export const login = async () => {
    console.log("LOGIN PROCEDURE INITIATED..")
    
    const {address} = await connect()
    console.log("LOGIN PROCEDURE: CURRENT ADDRESS", address);

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
                publicAddress: address
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



