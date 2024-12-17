import ConnectionCard from "@/components/cards/ConnectionCard";
import LatestDepositsCard from "@/components/cards/RecentDeposits";
import NewDepositCard from "@/components/cards/NewDepositCard";
import UserDepositsCard from "@/components/cards/UserDepositsCard";
import MenuBar from "@/components/OptionsBar";
import { useEffect } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import { sepolia } from 'wagmi/chains';
import ConnectCard from "@/components/cards/ConnectCard"

function MainPage() {

  const account = useAccount();

  // Switch to sepolia chain if the chain is undefined (used as fallback)
  const { switchChain } = useSwitchChain();
  const { chain } = useAccount();
  useEffect(() => {
    if (chain === undefined)
      switchChain({ chainId: sepolia.id });
  }, [])

  return (
    <>
      <div className="flex flex-1 h-screen justify-center bg-zinc-100">
        <div className="max-w-screen-xl flex flex-1 flex-col gap-4 p-3">

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">HODLER</h1>
            <MenuBar />
          </div>

          <div className="flex-1 grid grid-cols-3 gap-5">

            <div className="flex flex-col h-full gap-5">
              <ConnectionCard />
              <LatestDepositsCard />
            </div>

            <div className="flex flex-col h-full gap-5 col-span-2">
              {(!account.isConnected || account.chain === undefined) ?
                <ConnectCard />
                :
                <>
                  <NewDepositCard />
                  <UserDepositsCard />
                </>
              }

              <p className="text-xs text-neutral-400">
                HODLER &mdash; Version 1.0 <a href="https://github.com/rbtavares/hodler" target="_blank" className="ml-3 text-neutral-500">rbtavares/hodler</a>
                <br />
                This project is currently under development and will always be a project made for practicing, select and use contracts/chains at your own risk.
              </p>

            </div>

          </div>


        </div>
      </div>
    </>
  );
}

export default MainPage;
