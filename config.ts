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
    nftContract: "0xFeF0D1a425d69881d253546096BF744985e7e887",
    marketContract: "0xa7a33f262810FCBae45b0B1dbd2cA142FEDc9470",
    orbContract: "0xD3f8e57a8cE7199950d556ae3C12A097cD902649",
    mintGuardContract: "0x841B6244f69606A3bBDa7c841A5F6Fa3229933ED"
}
