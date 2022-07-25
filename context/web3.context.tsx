declare let window: any;

import { ethers } from 'ethers';
import React, { useContext, useEffect } from 'react'
import { IWeb3Context, IWeb3State } from '../interfaces/web3.interfaces';
import { checkChainID, checkMetaMask } from '../services/web3.service';


const Web3ContextDefault = {
  chainId: null,
  publicAddress: null,
  provider: null,
  connectWeb3: () => {}
}
export const Web3Context = React.createContext<IWeb3Context>(Web3ContextDefault)

export const Web3Provider = (props: any) => {
    const [web3State, setWeb3State] = React.useState<IWeb3State>(Web3ContextDefault)

    async function connectWeb3() {
      const metamaskProvider = await checkMetaMask()
      await checkChainID()
  
      const provider = new ethers.providers.Web3Provider(metamaskProvider)
      const { chainId } = await provider.getNetwork()
      const signer = provider.getSigner();
  
      const addr = await signer.getAddress()
      const address = addr.toLowerCase()
  
      console.log("WEB3-SERVICE: CHAIN-ID", chainId);
      console.log("WEB3-SERVICE: ADDRESS", addr);
      // console.log("WEB3-SERVICE: CHAIN-ID", chainId);
      
      await setWeb3(
        chainId,
        address,
        provider
      )
      return true
    }

    async function setWeb3(_chainId: number, _publicAddress: string, _provider: ethers.providers.Web3Provider){
      setWeb3State({
        chainId: _chainId,
        publicAddress: _publicAddress,
        provider: _provider
      })
    }
  
    const value = {
      chainId: web3State.chainId,
      publicAddress: web3State.publicAddress,
      provider: web3State.provider,
      connectWeb3
    }
  
    return (
      <Web3Context.Provider value={value}>
       {props.children}
      </Web3Context.Provider>
    )
}