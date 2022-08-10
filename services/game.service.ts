import { URIs } from "../config";

export const claimTokens = async (tokenID: number, publicAddress: string) => {
    const res = await fetch(`${URIs.apiURI}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                query ClaimTokens($publicAddress: String!, $tokenId: Int!) {
                    claimTokens(publicAddress: $publicAddress, tokenID: $tokenId) {
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
                tokenId: Number(tokenID)
            }
        }),
        
    })
    const resData = await res.json()

    return resData
    console.log("MATCH RESULTS", resData);
    
}

export const mintTokens = async (tokenID: number, publicAddress: string) => {
    const res = await fetch(`${URIs.apiURI}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query:`
                mutation MintTokens($publicAddress: String!, $tokenId: Int!) {
                    mintTokens(publicAddress: $publicAddress, tokenID: $tokenId) {
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
                tokenId: Number(tokenID)
            }
        }),
        
    })
    const resData = await res.json()

    return resData
    console.log("MATCH RESULTS", resData);
    
}