import { createConfig, http } from 'wagmi'
import { foundry, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [foundry, sepolia],
  connectors: [metaMask()],
  transports: {
    [foundry.id]: http(),
    [sepolia.id]: http()
  },
})