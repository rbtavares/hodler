import { createConfig, http } from 'wagmi'
import { foundry, sepolia } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export const config = createConfig({
  chains: [foundry, sepolia],
  connectors: [metaMask()],
  transports: {
    [foundry.id]: http(),
    [sepolia.id]: http()
  },
});