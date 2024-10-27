import MetamaskIcon from '@/assets/metamask.svg';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";
import { useAccount, useConnect, useConnectors } from "wagmi";
import { Loader2 } from 'lucide-react';

const ConnectDialog = () => {
    const account = useAccount();
    const connectors = useConnectors();
    const { connect } = useConnect();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={account.isConnecting || account.isReconnecting} className="h-8"> {(account.isConnecting || account.isConnected) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Connect{(account.isConnecting || account.isConnected) && <>ing...</>}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Connect your wallet</DialogTitle>
                    <DialogDescription>
                        To start holding values in HODLER start by connecting your wallet.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    {connectors && connectors.length > 0 && <>
                        {connectors.map((con) => {
                            return (
                                <DialogClose asChild>
                                    <Button
                                        key={con.id}
                                        onClick={() => connect({ connector: con })}
                                    >
                                        <img src={MetamaskIcon} className="size-6" />{con.name}
                                    </Button>
                                </DialogClose>
                            )
                        })}
                    </>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConnectDialog;