import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CONTRACT_ADDRESS } from "@/config";
import { CircleDollarSign, Fingerprint, Network } from "lucide-react";
import { useAccount } from "wagmi";
import './ConnectionCard.css';

const ConnectionCard = () => {

  const account = useAccount();

  return (
    <div className="flex w-full row-span-2 h-48">
      <Card className="w-full relative overflow-hidden">
        <div className={`box-inner absolute bottom-0 w-full flex flex-col gap-4 items-start p-3 pt-4 ${account.isConnected && account.chain !== undefined ? 'green-wave' : 'red-wave'}`}>

          <div className="flex justify-between w-full pr-2 items-center">
            <div className="flex flex-row items-center gap-1">
              <div className="aspect-square h-8 flex items-center justify-center">
                <div className={`aspect-square h-4 rounded-full ${account.isConnected && account.chain !== undefined ? 'bg-green-500' : 'bg-red-600'}`}>
                  {account.isConnected && account.chain !== undefined && <div className="aspect-square h-4 rounded-full bg-green-500 opacity-50 animate-ping" />}
                </div>
              </div>

              {account.isConnected ?
                account.chain !== undefined ?
                  <h1 className="text-2xl font-medium">Connected</h1>
                  :
                  <h1 className="text-2xl font-medium">Incompatible Chain</h1>
                :
                <h1 className="text-2xl font-medium">Disonnected</h1>
              }
            </div>

            {account.isConnected &&
              <div className="flex items-center gap-2">
                <Network size={16} />
                {account.chain !== undefined ?
                  // <div className="flex flex-col items-center">
                  //   <h5>{account.chain.name}</h5>
                  //   <h6 className="text-xs font-mono text-neutral-600">{account.chain.id}</h6>
                  // </div>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <h5>{account.chain.name}</h5>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <h1 className="text-sm font-medium border-b border-dashed pb-1 mb-2">{account.chain.name} Chain</h1>
                        <div className="flex flex-col gap-1">
                          <p className="flex gap-1 items-center font-mono"><Fingerprint size={14} /> {account.chain.id}</p>
                          <p className="flex gap-1 items-center font-mono"><CircleDollarSign size={14} /> {account.chain.nativeCurrency.name} (${account.chain.nativeCurrency.symbol})</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  :
                  <p>(ID {account.chainId})</p>
                }
              </div>
            }
          </div>

          {account.isConnected ?
            account.chain !== undefined ?
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="font-mono text-sm text-zinc-400 text-start pl-2 flex items-center gap-1">{CONTRACT_ADDRESS}</p>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>HODLER Contract Address</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              :
              <p className="w-full text-sm text-zinc-400 text-start pl-2">Switch to a compatible chain in your wallet or use the settings.</p>
            :
            <p className="w-full text-sm text-zinc-400 text-start pl-2">Connect to begin holding funds.</p>
          }
        </div>
      </Card>
    </div>
  )
}

export default ConnectionCard;