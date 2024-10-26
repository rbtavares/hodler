import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

const InfoDialog = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button><Info /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-2">About HODLER v1.0</DialogTitle>
                    <DialogDescription className="flex flex-col gap-2">
                        <p>HODLER is a full-stack dApp for holding funds on Ethereum blockchains for a minimum defined time using Smart Contracts.</p>
                        <p>This project is currently under development and will always be a project made for practicing, select and use contracts/chains at your own risk. It's strongly unadvised to use HODLER's contracts in production environemnts without appropriately auditing them beforehand.</p>
                        <p>The source code for the entire project can be found at:<br /><a className="text-black" href="https://github.com/rbtavares/hodler" target='_blank'>github.com/rbtavares/hodler</a></p>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default InfoDialog;
