import { URIs } from "../config";
import { IAegis, ICollection, IRune } from "../interfaces/nft.interfaces";

export const fetchCollections = async (): Promise<Array<ICollection>> => {
    console.log("GET-СOLLECTIONS PROCEDURE INITIATED..")


    console.log("GET-СOLLECTIONS PROCEDURE: GET NFTs REQUEST")
    const getCollectionsRes = await fetch(`${URIs.subgraphURI}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    collections {
                        name
                    }
                }
            `,
        })
    })
    console.log("GET-СOLLECTIONS RES", getCollectionsRes);
    
    const getCollectionsData = await getCollectionsRes.json()
    console.log("GET-СOLLECTIONS DATA", getCollectionsData);

    const collections = getCollectionsData.data.collections
    console.log("GET-СOLLECTIONS COLLECTIONS", collections);

    return collections
}

export const fetchGameCollections = async (_game: string): Promise<Array<ICollection>> => {
    console.log("GET-GAME-СOLLECTIONS PROCEDURE INITIATED..")
    console.log("GET-GAME-СOLLECTIONS GAME", _game);

    console.log("GET-СOLLECTIONS PROCEDURE: GET NFTs REQUEST")
    const getCollectionsRes = await fetch(`${URIs.subgraphURI}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                {
                    games(where: $where) {
                        collections {
                          name
                          description
                        }
                    }
                }
            `,
            variables: {
                "where": {
                    "name": _game
                }
            }
        })
    })
    console.log("GET-GAME-СOLLECTIONS RES", getCollectionsRes);
    
    const getCollectionsData = await getCollectionsRes.json()
    console.log("GET-GAME-СOLLECTIONS DATA", getCollectionsData);

    const collections = getCollectionsData.data.games[0].collections
    console.log("GET-GAME-СOLLECTIONS COLLECTIONS", collections);

    // console.log("RUNES",runes)
    return collections
}

export const fetchCollection = async (
    _collection: string, 
    _orderBy: string,
    _orderDirection: string
    ): Promise<Array<IAegis | IRune>> => {
        console.log("GET-СOLLECTION PROCEDURE INITIATED..")
        console.log("GET-СOLLECTION COLLECTION", _collection);

        console.log("GET-СOLLECTION PROCEDURE: GET NFTs REQUEST", _collection)
        const getCollectionRes = await fetch(`${URIs.subgraphURI}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query:`
                query Collections($where: Collection_filter, $whereNfts: NFT_filter, $orderBy: NFT_orderBy, $orderDirection: OrderDirection){
                        collections(where: $where) {
                            nfts(where: $whereNfts, orderBy: $orderBy, orderDirection: $orderDirection) {
                            id
                            tokenId
                            nftAddress
                            level
                            image
                            owner
                            name
                            price
                            ...on Aegis {
                                power
                                intelligence
                                durability
                            }
                            }
                        }
                    }
                `,
                variables: {
                    "where": {
                        "name": _collection,
                    },
                    "whereNfts": {
                        "owner": "0x0000000000000000000000000000000000000000",
                    },
                    "orderBy": _orderBy,
                    "orderDirection": _orderDirection


                }
                
            })
        })
        console.log("GET-СOLLECTION RES", getCollectionRes);
        
        const getCollectionData = await getCollectionRes.json()
        console.log("GET-СOLLECTION DATA", getCollectionData);

        const collection = getCollectionData.data.collections[0].nfts
        console.log("GET-СOLLECTION COLLECTIONS", collection);

        return collection
}