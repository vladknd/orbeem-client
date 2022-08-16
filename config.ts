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

//MUMBAI
// export const contracts = {
//     nftContract: "0xFeF0D1a425d69881d253546096BF744985e7e887",
//     marketContract: "0xa7a33f262810FCBae45b0B1dbd2cA142FEDc9470",
//     orbContract: "0xD3f8e57a8cE7199950d556ae3C12A097cD902649",
//     mintGuardContract: "0x841B6244f69606A3bBDa7c841A5F6Fa3229933ED"
// }



//MAINNET
export const contracts = {
    nftContract: "0xca8FEA3c0336f6498cF3789194817F4042b9d742",
    marketContract: "0x807F71A876AE2656d0b0F464584F6F46829bBb7a",
    orbContract: "0x7cBF2774872DB1948341532Be903f507EE0BF3f9",
    mintGuardContract: "0xFa7Ef209cDd561043C84C021dDa8434514E6Fdf9"
}


