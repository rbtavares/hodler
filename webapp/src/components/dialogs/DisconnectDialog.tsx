import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Unplug } from "lucide-react";
import { useDisconnect } from "wagmi";

const DisconnectDialog = () => {
  const { disconnect } = useDisconnect();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><Unplug /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Disconnect</DialogTitle>
          <DialogDescription>
            By disconnecting, you'll not be able to interact with the application until you reconnect your wallet.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="link">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" variant="destructive" onClick={() => { disconnect() }}>
            Disconnect
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisconnectDialog;
