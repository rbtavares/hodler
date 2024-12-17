import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { useAccount } from "wagmi";
import ChainSelector from "../selectors/ChainSelector";
import { Input } from "../ui/input";

const SettingsDialog = () => {

    const account = useAccount();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Settings />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                    <DialogDescription>
                        By disconnecting you'll not be able to interact with the application until you reconnect your wallet.
                    </DialogDescription>
                </DialogHeader>
                {/* content */}
                <div className="flex flex-col gap-3">

                    <hr className="h-1" />
                    <div>
                        <ChainSelector className="absolute right-6" />

                        <h1 className="w-full flex justify-between items-center text-lg font-medium">Chain</h1>
                        <ul className="">
                            <li><b>Name:</b> {account.chain ? account.chain.name : 'N/A'}</li>
                            <li><b>ID:</b> {account.chain ? <span className="font-mono">{account.chain.id}</span> : account.chainId ? <span className="font-mono">{account.chainId}</span> : 'N/A'}</li>
                            <li><b>Currency:</b> {account.chain ? <>{account.chain.nativeCurrency.name} <span className="font-mono bg-neutral-200 px-1 py-0.5 rounded-md">${account.chain.nativeCurrency.symbol}</span></> : 'N/A'}</li>
                        </ul>
                    </div>
                    <hr className="h-1" />
                    <div>
                        <h1 className="w-full flex justify-between items-center text-lg font-medium">Contract</h1>
                        <div className="flex gap-2">
                            <Input placeholder="0x0" />
                            <Button>Update</Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SettingsDialog