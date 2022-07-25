// import { BigNumber, ethers } from 'ethers';


// import Rune from '../ABI/Rune.json'





// import { URIs, contracts } from '../config';

// //___________________TOKEN_____________________________



// //___________________________UTILITIES_________________________________________
// interface IConnect {
//     chainId: number;
//     address: string;
//     provider: ethers.providers.Web3Provider;
// }
// export const connect = async (): Promise<IConnect> => {
//     const metamaskProvider = await checkMetaMask()
//     const provider = new ethers.providers.Web3Provider(metamaskProvider)
//     const { chainId } = await provider.getNetwork()

//     const signer = provider.getSigner();
    

//     const addr = await signer.getAddress()
//     const address = addr.toLowerCase()

//     console.log("CURENT WEB3 ADDRESSE", addr);
//     console.log("CURENT WEB3 CHAIN-ID", chainId);
    
//     return {
//         chainId,
//         address,
//         provider
//     }
// }

// export const linkMetamask = async () => {
//     const web3 = await checkMetaMask()
//     const provider = new ethers.providers.Web3Provider(web3)
//     await provider.send("eth_requestAccounts", []);
// }

// export const checkMetaMask = async () => {
//     let provider 
//     if(window.ethereum){
//         provider =  await window.ethereum 
//         console.log("CHECK METAMASK: PROVIDER AVAILABLE", provider)
//     } else if(window.web3){
//         provider = await window.web3.currentProvider
//         console.log("WEB3", provider)
//     } else{
//         console.log("NO METAMASK")
//         alert("INSTALL METAMASK")
//     }
//     return provider
// }





