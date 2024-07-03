import { useAccount, useDisconnect, useReadContract } from 'wagmi';
import { localhost } from 'wagmi/chains';
import Tooltip from "../components/ToolTip";
import { abi } from '../abi';
import refresh from '../../assets/refresh.svg';

function MainPage() {
    const account = useAccount();
    const { disconnect } = useDisconnect();

    function getAddressDepositCount(address: string) {
        return useReadContract({
            abi,
            address: import.meta.env.VITE_CONTRACT_ADDRESS,
            functionName: 'getDepositCount',
            chainId: localhost.id,
            args: [address]
        })
    }

    return (
        <div className="min-h-screen flex flex-col p-5 pb-10">
            <div className="mb-5 flex justify-between items-center">
                <h2 className='text-5xl font-bold bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow'>HODLER</h2>
                {account.status === 'connected' &&
                    <div className='space-x-3 flex items-center'>
                        <Tooltip content={
                            <div className="flex flex-col font-mono text-xs">
                                {account.addresses.map((address: string, index: number) => (
                                    <span key={index}>{`${address.slice(0, 5)}...${address.slice(-4)}`.toLowerCase()}</span>
                                ))}
                            </div>
                        }>
                            <span className='text-zinc-600 text-sm'>{account.addresses.length} address{account.addresses.length !== 1 && 'es'} connected</span>
                        </Tooltip>
                        <button className='text-red-600 border-2 border-red-300 bg-red-100 px-1 rounded hover:bg-red-500 hover:border-red-500 hover:text-white duration-200' type="button" onClick={() => disconnect()}>Disconnect</button>
                    </div>
                }
            </div>
            <div className='grid grid-cols-2 gap-10 flex-grow min-h-0'>
                <div className='border-2 border-zinc-200 bg-zinc-100 rounded p-4 row-span-2 space-y-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl text-zinc-600 font-light'>Your Hodlings</h1>
                        <img src={refresh} className='size-6' />
                    </div>
                    {account.status === 'connected' &&
                        <div className='flex flex-col gap-2'>
                            {account.addresses.map((address: string, index: number) => (
                                <div className='bg-zinc-200 p-2 space-y-2'>
                                    <div className='flex justify-between items-center text-zinc-800'>
                                        <h2 className='font-mono' key={index}>{`${address.slice(0, 7)}`.toLowerCase()}<span className='text-zinc-400'>{`${address.slice(7)}`.toLowerCase()}</span></h2>
                                        <div className='bg-zinc-300 rounded font-mono aspect-square flex items-center justify-center w-6 h-6'>{getAddressDepositCount(address).data?.toString()}</div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div className='px-1 bg-zinc-100'>placeholder</div>
                                        <div className='px-1 bg-zinc-100'>placeholder</div>
                                        <div className='px-1 bg-zinc-100'>placeholder</div>
                                        <div className='px-1 bg-zinc-100'>placeholder</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div className='border-2 border-zinc-200 bg-zinc-100 rounded p-4'>
                    <h1 className='text-3xl text-zinc-600 font-light'>Start Hodling</h1>
                </div>
                <div className='border-2 border-zinc-200 bg-zinc-100 rounded p-4'>
                    <h1 className='text-3xl text-zinc-600 font-light'>idk</h1>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
