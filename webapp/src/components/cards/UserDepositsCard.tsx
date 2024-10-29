import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { CONTRACT_ADDRESS } from "@/config";
import { abi } from '@/lib/abi';
import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";

const REFETCH_COOLDOWN = 10;

const UserDepositsCard = () => {
    const account = useAccount();
    const [refetchCountdown, setRefetchCountdown] = useState(0);
    const userDeposits = useReadContract({
        abi,
        address: CONTRACT_ADDRESS,
        functionName: 'getDeposits',
        args: [account.address]
    });

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setRefetchCountdown((prevCountdown) => {
                if (prevCountdown >= REFETCH_COOLDOWN) {
                    userDeposits.refetch();
                    return 0;
                }
                return prevCountdown + 1;
            });
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <div className="flex h-full">
            <Card className="flex flex-col w-full p-3 max-h-[32rem] relative">
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
                            {(Array.isArray(userDeposits.data) ? userDeposits.data : []).map((deposit, index) => (
                                <TableRow key={index}>
                                    <TableCell>Ether</TableCell>
                                    <TableCell>{(Number(deposit.amount) / 10 ** 18).toFixed(6)}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="default">Withdraw</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Fixed Progress bar at the bottom */}
                <div className="w-full pt-3">
                    <Progress className="w-full h-1" value={(refetchCountdown / REFETCH_COOLDOWN) * 100} />
                </div>
            </Card>
        </div>
    );
};

export default UserDepositsCard;
