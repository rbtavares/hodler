import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CONTRACT_ADDRESS } from "@/config";
import { abi } from '@/lib/abi';
import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import UserDeposit from "../UserDeposit";

// Re-fetch Cooldown
const REFETCH_COOLDOWN = 10;

const UserDepositsCard = () => {
  const account = useAccount();
  const [refetchCountdown, setRefetchCountdown] = useState<number>(REFETCH_COOLDOWN);
  const userDeposits = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: 'getDeposits',
    args: [account.address]
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRefetchCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          userDeposits.refetch();
          return REFETCH_COOLDOWN;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex h-full relative">
      <Card className="flex flex-col w-full p-3 absolute  h-full">
        <h1 className="my-2 text-3xl font-medium text-center">Your Holdings</h1>

        {/* Scrollable content area */}
        <div className="flex-grow overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                (Array.isArray(userDeposits.data) ? userDeposits.data : [])
                  .sort((a, b) => Number(a.unlockTime) - Number(b.unlockTime)) // Sort by unlockTime ascending
                  .map((deposit, index) => <UserDeposit key={index} deposit={deposit} />)
              }
            </TableBody>
          </Table>
        </div>

        {/* Fixed Progress bar at the bottom */}
        <div className="w-full pt-3">
          <Progress className="w-full h-1" value={100 - ((refetchCountdown / REFETCH_COOLDOWN) * 100)} />
        </div>
      </Card>
    </div>
  );
};

export default UserDepositsCard;
