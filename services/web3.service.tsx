import { ethers } from 'ethers';
import React, { useContext, useEffect } from 'react'

declare let window: any;

interface IWeb3Context  {
  chainId: number | null;
  publicAddress: string | null;
  provider: ethers.providers.Web3Provider | null;
  setWeb3(_chainId: number, _publicAddress: string, _provider: ethers.providers.Web3Provider): void;
//   setDisconnected: () => void;
}

const Web3ContextDefault = {
  chainId: null,
  publicAddress: null,
  provider: null,
  setWeb3: () => {}
//   setLoggedIn: () => {},
//   setLoggedOut: () => {},
}



export const Web3Context = React.createContext<IWeb3Context>(Web3ContextDefault)

interface IWeb3State {
  chainId: number | null;
  publicAddress: string | null;
  provider: ethers.providers.Web3Provider | null;
}
export const Web3Provider = (props: any) => {
  const [web3State, setWeb3State] = React.useState<IWeb3State>(Web3ContextDefault)

  async function setWeb3(_chainId: number, _publicAddress: string, _provider: ethers.providers.Web3Provider){
    setWeb3State({
      chainId: _chainId,
      publicAddress: _publicAddress,
      provider: _provider
    })
  }

  useEffect(() => {

    if(typeof window.ethereum !== "undefined") {

        window.ethereum.on("accountsChanged", (account: any) => {
          
            console.log("ACCOUNT CHANGED TO", account);
            setWeb3State((prev:IWeb3State) => {
              return {...prev, publicAddress: account}
          })
            
        });
        window.ethereum.on("chainChanged", (chainID: any) => {
            console.log("CHAIN CHANGED TO", chainID);
            setWeb3State((prev:IWeb3State) => {
                return {...prev, chainId:  chainID}
            })
        });
        // const provider = new ethers.providers.Web3Provider(window.ethereum)
        // setWeb3State((prev:IWeb3State) => {
        //   return {...prev, provider}
        // })
    }
    console.log("WEB3-CONTEXT", web3State);
    
  }, []);

  const value = {
    chainId: web3State.chainId,
    publicAddress: web3State.publicAddress,
    provider: web3State.provider,
    setWeb3
  }


  return (
    <Web3Context.Provider value={value}>
     {props.children}
    </Web3Context.Provider>
  )
}
  
export const useWeb3 = () => {
  return useContext(Web3Context)
}