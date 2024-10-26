import { http, createConfig } from 'wagmi'
import { localhost, sepolia, foundry } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [foundry, sepolia],
  connectors: [metaMask()],
  transports: {
    [foundry.id]: http(),
    [sepolia.id]: http(),
  },
})