
import AccountPopup from './AccountPopup';

interface MainPageProps {
    disconnect: any,
    account: any
}

function MainPage({ disconnect, account }: MainPageProps) {


    return (
        <div className="p-5">
            <div className="mb-5 flex justify-between items-center">
                <h2 className='text-5xl font-bold bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-300 bg-clip-text text-transparent drop-shadow'>HODLER</h2>
                <AccountPopup account={account} disconnect={disconnect} />
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div className='bg-zinc-100 rounded p-5'>
                    <h1 className='text-3xl font-light'>What are you hodling?</h1>
                </div>
                <div className='bg-zinc-100 rounded p-5'>
                    <h1 className='text-3xl font-light'>Start holding now...</h1>
                </div>
                <div className='bg-zinc-100 rounded p-5'>
                    <h1 className='text-3xl font-light'>Global Statistics</h1>
                </div>
            </div>
        </div>
    );
}

export default MainPage;