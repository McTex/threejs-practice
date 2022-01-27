import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '~/styles/global'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
