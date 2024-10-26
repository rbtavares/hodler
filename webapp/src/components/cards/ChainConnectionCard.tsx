import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import './ChainConnectionCard.css';

const ChainConnectionCard = ({ connected }: { connected: boolean }) => {
    return (
        <div className="flex w-full h-full row-span-2">
            <Card className="w-full relative overflow-hidden">
                <div className={`box-inner absolute bottom-0 w-full flex flex-col gap-4 items-start p-3 pt-4 ${connected ? 'green-wave' : 'red-wave'}`}>

                    <div className="flex justify-between w-full pr-2 items-center">
                        <div className="flex flex-row items-center gap-1">
                            <div className="aspect-square h-8 flex items-center justify-center">
                                <div className={`aspect-square h-4 rounded-full ${connected ? 'bg-green-500' : 'bg-red-600'}`}>
                                    {connected && <div className="aspect-square h-4 rounded-full bg-green-500 opacity-50 animate-ping" />}
                                </div>
                            </div>

                            {connected ?
                                <h1 className="text-2xl font-medium">Connected</h1>
                                :
                                <h1 className="text-2xl font-medium">Disonnected</h1>
                            }
                        </div>

                        {connected ?
                            <p>ETHEREUM MAIN</p>
                            :
                            <Button className="h-8">Connect</Button>
                        }
                    </div>

                    {connected ?
                        <p className="w-full font-mono text-sm text-zinc-400 text-start pl-2">0x<span className="uppercase">f39Fd6e51aad88F6F4ce6aB8827279cffFb92266</span></p>
                        :
                        <p className="w-full text-sm text-zinc-400 text-start pl-2">Waiting for chain connection...</p>
                    }
                </div>
            </Card>
        </div>
    )
}

export default ChainConnectionCard;