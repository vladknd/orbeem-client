import { URIs } from "../config";

export const claimTokens = async (publicAddress: string,nftID: string) => {
    console.log("CLAIM-TOKENS SERVICE INITIATED:", publicAddress, nftID);
    
    const res = await fetch(`${URIs.apiURI}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                query ClaimTokens($publicAddress: String!, $nftID: String!) {
                    claimTokens(publicAddress: $publicAddress, nftID: $nftID) {
                        __typename
                        ... on ClaimSuccess {
                            success {
                                award
                                kills
                                deaths
                                assists
                            }
                        }
                        ... on ClaimError {
                            error
                        }
                    }
                }
            `,
            variables: {
                publicAddress,
                nftID
            }
        }),
        
    })
    const resData = await res.json()
    console.log("MATCH RESULTS", resData);
    return resData
    
    
}

export const mintTokens = async (nftID: string, publicAddress: string) => {
    const res = await fetch(`${URIs.apiURI}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                mutation MintTokens($publicAddress: String!, $nftID: String!) {
                    mintTokens(publicAddress: $publicAddress, nftID: $nftID) {
                    __typename
                    ... on MintSuccess {
                        success {
                        award
                        kills
                        deaths
                        assists
                        }
                    }
                    ... on MintError {
                        error
                    }
                    }
                }
            `,
            variables: {
                publicAddress,
                nftID
            }
        }),
        
    })
    const resData = await res.json()

    return resData
    console.log("MATCH RESULTS", resData);
    
}