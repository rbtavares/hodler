import React from 'react';

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
        <div className="fixed bottom-0 left-0 w-full flex justify-between text-sm">
            <div className="flex">
                <div className={`${account.status === 'connected' ? 'bg-green-300 text-green-700' : account.status === 'disconnected' ? 'bg-red-300 text-red-700' : 'bg-yellow-300 text-yellow-700'} px-1`}>
                    {capitalize(account.status)}
                </div>
                <div className="px-1 text-zinc-500">{status} {error?.message}</div>
            </div>
            <div className="font-mono text-xs flex items-end pr-1 text-zinc-400">HODLER/1</div>
        </div>
    );
}

export default StatusBar;
