import ChainConnectionCard from "@/components/cards/ChainConnectionCard";
import LatestHoldsCard from "@/components/cards/LatestHoldingsCard";
import MenuBar from "@/components/MenuBar";
import NewHodlCard from "@/components/cards/NewHoldingCard";
import UserHodlings from "@/components/cards/UserHoldingsCard";
import TopHoldersCard from "@/components/cards/TopHoldersCard";

function MainPage() {
  return (
    <>
      <div className="w-full h-screen flex justify-center bg-zinc-100">
        <div className="max-w-screen-xl flex flex-col gap-4 p-3 w-full">

          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">HODLER</h1>
            <MenuBar />
          </div>

          <div className="grid grid-cols-3 gap-5 h-full">

            <ChainConnectionCard connected={false} />
            <NewHodlCard />
            <LatestHoldsCard />
            <UserHodlings />
            <TopHoldersCard />

            <div className="text-start text-xs font-mono text-gray-400 items-center justify-center flex flex-col gap-2">
              <p>
                HODLER &mdash; Version 1.0
                <br /><br />
                github.com/rbtavares/hodler
                <br /><br />
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
