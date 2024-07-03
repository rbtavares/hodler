import { useAccount, useConnect } from 'wagmi';

function ConnectPage() {
    const account = useAccount();
    const { connectors, connect } = useConnect();

    return (
        <div className='bg-gradient-to-br from-white to-slate-100 min-h-screen w-full flex flex-col items-center justify-center gap-5'>
            <h2 className='tracking-wide text-[10rem] font-bold bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow'>HODLER</h2>
            {account.status === 'disconnected' ?
                <>
                    <h3 className='text-2xl mt-5 font-light tracking-wide text-zinc-700'>Connect your wallet to begin hodling!</h3>
                    <ul className='flex gap-8'>
                        {connectors.map((connector) => (
                            <li>
                                <button
                                    className='border-2 border-black py-2 px-3 rounded hover:rounded-sm duration-200 hover:bg-zinc-200 active:scale-95'
                                    key={connector.uid}
                                    onClick={() => connect({ connector })}
                                    type="button"
                                >
                                    {connector.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
                :
                <h3 className='text-2xl mt-5 font-light tracking-wide text-zinc-700'>Connecting, please wait...</h3>
            }


        </div>
    );
}

export default ConnectPage;