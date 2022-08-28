import { FC } from 'react'
import type { AppProps } from 'next/app'
import { wrapper } from '../store'
import '../styles/global/global.scss'

const WrapperApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(WrapperApp)
