import { ApolloClient, InMemoryCache } from '@apollo/client'

import { URIs } from '../config'

export const graphClient = new ApolloClient({
    uri: `${URIs.apiURI}/graphql`,
    cache: new InMemoryCache()
})