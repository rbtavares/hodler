import { Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import ConnectDialog from "@/components/dialogs/ConnectDialog";
import './ChainConnectionCard.css';

const ChainConnectionCard = () => {

    const account = useAccount();

    return (
        <div className="flex w-full row-span-2 h-48">
            <Card className="w-full relative overflow-hidden">
                <div className={`box-inner absolute bottom-0 w-full flex flex-col gap-4 items-start p-3 pt-4 ${account.isConnected ? 'green-wave' : 'red-wave'}`}>

                    <div className="flex justify-between w-full pr-2 items-center">
                        <div className="flex flex-row items-center gap-1">
                            <div className="aspect-square h-8 flex items-center justify-center">
                                <div className={`aspect-square h-4 rounded-full ${account.isConnected ? 'bg-green-500' : 'bg-red-600'}`}>
                                    {account.isConnected && <div className="aspect-square h-4 rounded-full bg-green-500 opacity-50 animate-ping" />}
                                </div>
                            </div>

                            {account.isConnected ?
                                <h1 className="text-2xl font-medium">Connected</h1>
                                :
                                <h1 className="text-2xl font-medium">Disonnected</h1>
                            }
                        </div>

                        {account.isConnected ?
                            account.chain !== undefined ? 
                                account.chain.name + ' (' + account.chain.id + ')'
                                :
                                <span className="text-red-600 text-sm">Incompatible Chain {account.chainId}</span>
                            :
                            <ConnectDialog />
                        }
                    </div>

                    {account.isConnected ?
                        <p className="w-full font-mono text-sm text-zinc-400 text-start pl-2">0x<span className="uppercase">{account.address ? account.address.slice(2, account.address.length) : "Error fetching address."}</span></p>
                        :
                        <p className="w-full text-sm text-zinc-400 text-start pl-2">Waiting for chain connection...</p>
                    }
                </div>
            </Card>
        </div>
    )
}

export default ChainConnectionCard;