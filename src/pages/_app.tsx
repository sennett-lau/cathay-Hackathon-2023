import AppLayout from '@/layout/Layout'
import { store } from '@/store'
import '@/styles/font.scss'
import '@/styles/globals.scss'
import customTheme from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </ChakraProvider>
  )
}

export default App
