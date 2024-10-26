import MetamaskIcon from '@/assets/metamask.svg';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { useConnect, useConnectors } from "wagmi";

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