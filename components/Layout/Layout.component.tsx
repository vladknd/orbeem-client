import React from 'react'
import { useRouter } from 'next/router'
import { LayoutContainer } from './Layout.styled'
import HeaderComponent from '../Header/Header.component'
import FooterComponent from '../Footer/Footer.component'
import Head from 'next/head'

const Layout = (props: any) => {
  const Router = useRouter()
  return ( 
    <LayoutContainer>
        <Head>
          <title>THE TITLE</title>
          <meta name="description" content="THE DESCRIPTION"/>
        </Head>
        {Router.pathname === "/registration" ? null : <HeaderComponent/>}
            {props.children}
        {/* {Router.pathname === "/registration" ? null : <FooterComponent/>} */}
    </LayoutContainer>
  )
}

export default Layout