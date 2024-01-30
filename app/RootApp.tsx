'use client'

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'

const RootApp = ({ children }: { children: React.ReactNode }) => (
  <DynamicContextProvider
    settings={{
      environmentId: '42c44b80-2240-40ea-8e01-23b7e88e26a6',
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    {children}
  </DynamicContextProvider>
)

export default RootApp
