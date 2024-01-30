'use client'

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'

const RootApp = ({ children }: { children: React.ReactNode }) => (
  <DynamicContextProvider
    settings={{
      environmentId: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    {children}
  </DynamicContextProvider>
)

export default RootApp
