import DisconnectDialog from "@/components/dialogs/DisconnectDialog";
import { useAccount } from "wagmi";
import InfoDialog from "./dialogs/InfoDialog";
import SettingsDialog from "./dialogs/SettingsDialog";

const OptionsBar = () => {
    const { isConnected, isConnecting } = useAccount();

    return (
        <div className="flex flex-row gap-2">
            {isConnected && !isConnecting && <DisconnectDialog />}
            <InfoDialog />
            <SettingsDialog />
        </div>
    );
};

export default OptionsBar;