import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from '../components/Header/Header.component'
import FooterComponent from '../components/Footer/Footer.component'

import { useRouter } from 'next/router'
import {ApolloProvider} from '@apollo/client'
import { graphClient } from '../graphql'
import { UserProvider } from '../services/user.service'
import { useEffect } from 'react'
import {Web3Provider} from '../services/web3.service'
import Layout from '../components/Layout/Layout.component'
declare let window: any;

function MyApp({ Component, pageProps }: AppProps) {
  const Router = useRouter()

  return (
    <Web3Provider>
      <UserProvider>
        <ApolloProvider client={graphClient}>
          {/* {Router.pathname === "/registration" ? null : <HeaderComponent/>}
            <Component {...pageProps} />
          {Router.pathname === "/registration" ? null : <FooterComponent/>} */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </UserProvider>
    </Web3Provider>
  )

}

export default MyApp
