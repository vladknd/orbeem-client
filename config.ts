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
    nftContract: "0xE1d6bAEa16167d45518781d4f95121BAaEaFBF11",
    marketContract: "0x9d1D92cE5805Ec15CD95eB0018BDc67633e17807",
    orbContract: "0xA705c4274cd46b916211d75A3d6B456f1FB0CD5f",
    mintGuardContract: "0x3ddb6A714B2D6F8990dbb1d51755889588d6ad01"
}
