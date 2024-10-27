import { Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import ConnectDialog from "@/components/dialogs/ConnectDialog";
import './ChainConnectionCard.css';
import { shortAddress } from "@/lib/utils";
import { CONTRACT_ADDRESS } from "@/config";

const ChainConnectionCard = () => {

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

                        {account.isConnected ?
                            account.chain !== undefined ?
                                account.chain.name + ' (' + account.chain.id + ')'
                                :
                                '(ID ' + account.chainId + ')'
                            :
                            <ConnectDialog />
                        }
                    </div>

                    {account.isConnected ?
                        account.chain !== undefined ?
                            <p className="w-full font-mono text-sm text-zinc-400 text-start pl-2">Using contract: {shortAddress(CONTRACT_ADDRESS)}</p>
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

export default ChainConnectionCard;