import { ethers } from 'ethers'

export interface IWeb3State {
    chainId: number | null;
    publicAddress: string | null;
    provider: ethers.providers.Web3Provider | null;
}

export interface IWeb3Context extends IWeb3State  {
    connectWeb3(): Promise<boolean>;
}