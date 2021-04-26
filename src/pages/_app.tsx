import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import '@common/css/layout.scss'
import { LayoutContainer } from '@containers/LayoutContainer/LayoutContainer'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <LayoutContainer>
    <Component {...pageProps} />
  </LayoutContainer>
)

export default storeWrapper.withRedux(CustomApp)
