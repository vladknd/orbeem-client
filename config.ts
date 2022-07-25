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
    nftContract: "0x4B6dF128f0210C3b44a73b66bB73dfEb279f22ea",
    marketContract: "0xfc87961500918b66d14Eda80D07cC440a21f4599",
    orbContract: "0xA67eADa7F4eA4a753Ab565Bdd2c5030D821be301",
    mintGuardContract: "0xA6Fa133E84826595B106Fb0bf6bE1BeBF4d4449d"
}
