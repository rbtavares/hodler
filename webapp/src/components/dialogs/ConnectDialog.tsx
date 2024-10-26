import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { useConnectors } from "wagmi";
import { useConnect } from 'wagmi'
import MetamaskIcon from '@/assets/metamask.svg';

const ConnectDialog = () => {
    const connectors = useConnectors();
    const { connect } = useConnect();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-8">Connect</Button>
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
                                <Button
                                    key={con.id}
                                    onClick={() => connect({ connector: con })}
                                >
                                    <img src={MetamaskIcon} className="size-6" />{con.name}
                                </Button>
                            )
                        })}
                    </>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConnectDialog;