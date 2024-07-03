import { http, createConfig } from 'wagmi'
import { localhost } from 'wagmi/chains'
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [localhost],
  connectors: [
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [localhost.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
