import { useAccount, useConnect } from 'wagmi';

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function StatusBar() {
    const account = useAccount();
    const { status, error } = useConnect();

    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-between text-sm">
            <div className="flex text-white">
                <div className={`${account.status === 'connected' ? 'bg-green-600' : account.status === 'disconnected' ? 'bg-red-600' : 'bg-yellow-400 text-black'} px-1`}>
                    {capitalize(account.status)} {account.status === 'connected' && ` to ${account.chainId}`} ({status}{error?.message})
                </div>
            </div>
            <div className="font-mono text-xs flex items-center pr-1 text-black"><a href='https://github.com/rbtavares5/hodler' target='_blank'>HODLER/1</a></div>
        </div>
    );
}

export default StatusBar;
