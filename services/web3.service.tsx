declare let window: any

import React, 
{ 
  useContext 
} from 'react'
import { ethers } from 'ethers'
import { Web3Context } from '../context/web3.context'


const MUMBAI = "0x13881"


//__________________________________CHECK-CHAIN-ID______________________________
export async function checkChainID() {
  const chainID = await window.ethereum.request({ method: 'eth_chainId' });
  console.log("WEB3 SERVICE: CHECK CHAIN_ID: ",chainID);

  if(chainID !== MUMBAI) {
    console.log("WEB3-SERVICE: NOT MATCHED", chainID);
    switchChain()
  }
}
//______________________________________________________________________________


//____________________________________CHECK-METAMASK_____________________________
export async function checkMetaMask() {
  let provider 
  if(window.ethereum){
      provider =  await window.ethereum 
      console.log("CHECK METAMASK: PROVIDER AVAILABLE", provider)
  } else if(window.web3){
      provider = await window.web3.currentProvider
      console.log("WEB3", provider)
  } else{
      console.log("NO METAMASK")
      alert("INSTALL METAMASK")
  }
  return provider
}
//________________________________________________________________________________


//_____________________________________SWITCH-CHAIN________________________________________
export async function switchChain() {
  window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: MUMBAI}]
  }).then((_promise: any) => {
    console.log("CHAIN HAS BEEN SWITCHED TO MUMBAI");
  }).catch((_error: any) => {
    if (_error.code === 4902) {
      window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainName: 'Polygon MUMABI',
            chainId: MUMBAI,
            nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
            rpcUrls: ['https://rpc-mumbai.maticvigil.com/']
          }
        ]
      }).then((_addedNetwork: any) => {
        console.log("WEB3-SERVICE: ADDED CHAIN", _addedNetwork);
      }).catch((_error:any) => {
        console.log("WEB3-SERVICE: ERROR", _error);
      })
    }
  })
}
//___________________________________________________________________________________________


//____________________________SIGN-MESSAGE_____________________________________
export const signMessage = async (nonce: string, publicAddress: string) => {
  const metamaskProvider = await checkMetaMask()
  const provider = new ethers.providers.Web3Provider(metamaskProvider)
  const signer = provider.getSigner()
  const signature = await signer.signMessage(`I am signing my one-time nonce: ${nonce}`)

  return { 
      publicAddress,
      signature
  }
}
//______________________________________________________________________________


export const useWeb3 = () => {
  return useContext(Web3Context)
}