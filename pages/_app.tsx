import { ThemeProvider } from 'styled-components'

import { CacheProvider } from '@emotion/react'

import createEmotionCache from '../theme/createEmotionCache'
import { theme } from '../theme/theme'
import '../theme/main.scss'

const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: any) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
