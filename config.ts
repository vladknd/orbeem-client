// require('dotenv').config()

export const URIs = {
    //LOCAL:
    // apiURI: "http://localhost:4000",

    //HEROKU:
    // apiURI: "https://orbeem-api.herokuapp.com",
    // ipfsGateway: "https://gateway.pinata.cloud/ipfs/",
    
    // subgraphURI: "https://api.thegraph.com/subgraphs/name/vladknd/orbeem"

    //DOTENV:
    apiURI: process.env.API,
    ipfsGateway: process.env.IPFS,
    
    subgraphURI: process.env.SUBGRAPH
    
}

export const contracts = {
    nftContract: "0xff95Ffea1a3cab6AB8128581786b1415dB19995a",
    marketContract: "0xB4CF4d0447d8e7A1c96f9aeDad561679d33b99b3",
    orbContract: "0x8BB0FBc6D0A53eCAe43fDad92FEcB3dDebe5516c",
    mintGuardContract: "0x3224F6E427ea812cA10BFDc4c56D8903D02a803c"
}

