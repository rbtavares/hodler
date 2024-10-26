import TokenSelector from "@/components/selectors/TokenSelector";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const tokens = [

    {
        value: "Ether",
        label: "Ether",
    },
    {
        value: "Tether USD",
        label: "Tether USD",
    },
    {
        value: "USDC",
        label: "USDC",
    },
    {
        value: "BNB",
        label: "BNB",
    },
    {
        value: "Wrapped BTC",
        label: "Wrapped BTC",
    },
    {
        value: "NEAR",
        label: "NEAR",
    },
    {
        value: "Custom ERC-20",
        label: "Custom ERC-20",
    }
]

const NewHodlCard = () => {

    const [amount, setAmount] = useState(0);
    const [token, setToken] = useState(null);

    return (
        <div className="flex w-full">
            <Card className="w-full relative overflow-hidden p-3 flex flex-col gap-3">
                <h1 className="text-3xl font-medium text-center my-2">New Holding</h1>

                <div className="grid grid-cols-3 flex-grow gap-10 border-b border-zinc-100 pb-5">
                    <div className="w-full flex flex-col gap-5">
                        <div className="flex flex-row gap-2 w-full items-center bg-black text-white rounded pl-2">
                            <h2 className="text-lg w-full">Token</h2>
                            <span className="aspect-square h-full flex items-center justify-center border-l">1</span>
                        </div>
                        <div className="flex flex-col gap-2 h-full justify-center">
                            <TokenSelector options={tokens} />
                            <Input disabled placeholder="Contract Address" value={"0x" + "dAC17F958D2ee523a2206206994597C13D831ec7".toUpperCase()} />
                            {/* <h3 className="text-lg font-medium">Token: <span className="font-light">USDT</span></h3> */}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-5">

                        <div className="flex flex-row gap-2 w-full items-center bg-black text-white rounded pl-2">
                            <h2 className="text-lg w-full">Amount</h2>
                            <span className="aspect-square h-full flex items-center justify-center border-l">2</span>
                        </div>
                        <div className="flex flex-col h-full justify-center gap-1">
                            <Input className="text-center pr-0 font-mono" placeholder="0" type="number" onChange={e => setAmount(Number(e.target.value))} />
                            <p className="text-xs text-gray-400 text-end">&asymp; $0.0 USD</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-5">

                        <div className="flex flex-row gap-2 w-full items-center bg-black text-white rounded pl-2">
                            <h2 className="text-lg w-full">Timing</h2>
                            <span className="aspect-square h-full flex items-center justify-center border-l">3</span>
                        </div>

                        <div className="flex flex-col gap-1 h-full justify-center">
                            <div className="grid grid-cols-3 gap-2">
                                <div>
                                    <Label>Days</Label>
                                    <Input className="pr-0" min={0} placeholder="0" type="number" />
                                </div>
                                <div>
                                    <Label>Hours</Label>
                                    <Input className="pr-0" min={0} max={23} placeholder="0" type="number" />
                                </div>
                                <div>
                                    <Label>Minutes</Label>
                                    <Input className="pr-0" min={0} max={59} placeholder="0" type="number" />
                                </div>
                            </div>
                            <p className="text-gray-400 text-xs text-end">9-DEC-24 19:54</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-between items-center">
                    <p className="text-lg italic text-gray-300">Hold <span className="text-gray-400">0.003</span> of <span className="text-gray-400">USDT</span> for <span className="text-gray-400">7d 5h 25m</span></p>
                    <Button>Confirm <ArrowRight /></Button>
                </div>
                {/* <Input type="number" placeholder="Amount" />
                
                <Button>Hold</Button> */}
            </Card>
        </div>
    )
}

export default NewHodlCard;