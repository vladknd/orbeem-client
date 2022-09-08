declare let window: any

//__________________________GLOBAL-IMPORTS__________________________
import { ethers } from "ethers";
//__________________________LOCAL-IMPORTS___________________________
//CONFIGs___________________________________________________________
import { contracts } from "../config";
//SERVICES__________________________________________________________
import { checkMetaMask } from "./web3.service";
//ABIs______________________________________________________________
import ORB from '../ABI/ORB.json'
import MintGuard from '../ABI/MintGuard.json'


//__________________________METHODS_________________________________
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

    const orb = new ethers.Contract(contracts.orbContract, ORB, signer) 
    const balance = await orb.balanceOf(_address)
    console.log('====================================');
    console.log(ethers.utils.formatUnits(balance, 18));
    console.log('====================================');
    return ethers.utils.formatUnits(balance, 18)
}


export const transferORB = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
                
    const guard = new ethers.Contract(contracts.mintGuardContract, MintGuard, signer)
    const options = {
        gasLimit: 300000
    }; 

    const tx = await guard.requestValue(options)
    const txRes = await tx.wait()
    console.log("TX", tx)
    console.log("TX-RES", txRes)
}