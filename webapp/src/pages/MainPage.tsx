import ChainConnectionCard from "@/components/cards/ChainConnectionCard";
import LatestHoldsCard from "@/components/cards/LatestHoldingsCard";
import NewHodlCard from "@/components/cards/NewHoldingCard";
import TopHoldersCard from "@/components/cards/TopHoldersCard";
import UserHodlings from "@/components/cards/UserHoldingsCard";
import MenuBar from "@/components/OptionsBar";
import { useEffect } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import { sepolia } from 'wagmi/chains';

function MainPage() {

  const { chains, switchChain } = useSwitchChain();
  const { chain } = useAccount();

  useEffect(() => {
    console.log(chains)
    if (chain === undefined)
      switchChain({ chainId: sepolia.id });
  }, [])

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-zinc-100">
        <div className="max-w-screen-xl flex flex-col gap-4 p-3 w-full">

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">HODLER</h1>
            <MenuBar />
          </div>

          <div className="grid grid-cols-3 gap-5 h-full">

            <div className="flex flex-col h-full gap-5">
              <ChainConnectionCard />
              <UserHodlings />
            </div>

            <div className="flex flex-col h-full gap-5 col-span-2">
              <NewHodlCard />
              <LatestHoldsCard />

              <div className="grid grid-cols-3 gap-5">

                <TopHoldersCard />

                <div className="text-start text-xs font-mono text-gray-400 items-center justify-center flex flex-col gap-2">
                  <p>
                    HODLER &mdash; Version 1.0
                    <br /><br />
                    This project is currently under development and will always be a project made for practicing, select and use contracts/chains at your own risk.
                  </p>
                </div>

              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  );
}

export default MainPage;
