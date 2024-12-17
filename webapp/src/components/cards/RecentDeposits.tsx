import { Card } from "@/components/ui/card";
import { CONTRACT_ADDRESS } from "@/config";
import { abi } from '@/lib/abi';
import { useState } from "react";
import { Log } from 'viem';
import { useWatchContractEvent } from "wagmi";

interface IRecentDeposit {
  author: string
  eventTime: number
  amount: number
  asset: string
  depositTime: number
}

const RecentDeposit = ({ author, eventTime, amount, asset, depositTime }: IRecentDeposit) => {
  return (
    <div className="bg-neutral-100 rounded px-2 py-1 flex flex-col gap-1">
      <div className="flex items-center justify-between relative">
        <h1 className="bg-gradient-to-r from-black via-black to-black/0 bg-clip-text text-transparent">{author}</h1>
        <h2 className="text-xs">{eventTime}</h2>
      </div>
      <h3 className="italic text-sm opacity-50">{amount} {asset} for {depositTime}</h3>
    </div>
  )
}

const RecentDepositsCard = () => {


  const [recentDeposits, setRecentDeposits] = useState<Log[]>([]);

  useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi,
    eventName: 'Deposit',
    onLogs(logs) {
      setRecentDeposits((prevDeposits) => {
        // Create a Set to remove duplicates based on a unique identifier
        const uniqueLogHashes = new Set(prevDeposits.map(log => log.transactionHash));

        // Filter out logs that are already in the previous deposits
        const newLogs = logs.filter(log => !uniqueLogHashes.has(log.transactionHash));

        // Combine and limit (optional)
        return [...prevDeposits, ...newLogs].slice(-10); // Keep last 10 logs, for example
      });
    },
  });

  return (
    <div className="flex h-full relative">
      <Card className="flex flex-col w-full p-3 absolute  h-full">
        <h1 className="my-2 text-3xl font-medium text-center mb-5">Recent Deposits</h1>

        {/* Scrollable content area */}
        <div className="flex flex-col gap-3 flex-grow overflow-y-auto">
          {recentDeposits.map((item, index) => <RecentDeposit key={index} author={item.data} eventTime={1} amount={2} asset="A" depositTime={89} />)}
        </div>
      </Card>
    </div>
  )
}

export default RecentDepositsCard;