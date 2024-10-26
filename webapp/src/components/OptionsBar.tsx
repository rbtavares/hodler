import DisconnectDialog from "@/components/dialogs/DisconnectDialog";
import { useAccount } from "wagmi";
import SettingsDialog from "./dialogs/SettingsDialog";

const OptionsBar = () => {
    const { isConnected, isConnecting } = useAccount();

    return (
        <div className="flex flex-row gap-2">
            {isConnected && !isConnecting && <DisconnectDialog />}
            <SettingsDialog />
        </div>
    );
};

export default OptionsBar;