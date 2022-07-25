import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
    mutation Register($publicAddress: String!, $email: String!, $firstName: String!, $surname: String!, $steamId: String!) {
        register(publicAddress: $publicAddress, email: $email, firstName: $firstName, surname: $surname, username: $username) {
            token
            user {
                steamId
                id
                publicAddress
                nonce
                firstName
                email
                username
            }
        }
    }
`

export const VERIFY_JWT = gql`
    mutation VerifyJwt($token: String) {
        verifyJwt(token: $token) {
            id
            publicAddress
            nonce
            surname
            firstName
            email
            username
            steamId
            balance
            verified
        }
    }
`