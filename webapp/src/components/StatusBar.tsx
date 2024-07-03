interface StatusBarProps {
    account: any,
    status: any,
    error: any
}

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function StatusBar({ status, account, error }: StatusBarProps) {

    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-between text-sm bg-zinc-700 text-white">
            <div className="flex">
                <div className={`${account.status === 'connected' ? 'bg-green-600' : account.status === 'disconnected' ? 'bg-red-600' : 'bg-yellow-400 text-black'} px-1`}>
                    {capitalize(account.status)} {account.status === 'connected' && ` (${account.chainId})`}
                </div>
                <div className="px-1 text-zinc-400">{status} {error?.message}</div>
            </div>
            <div className="font-mono text-xs flex items-center pr-1"><a href='https://github.com/rbtavares5/hodler' target='_blank'>HODLER/1</a></div>
        </div>
    );
}

export default StatusBar;
