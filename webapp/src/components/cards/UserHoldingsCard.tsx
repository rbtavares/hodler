import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { useAccount } from "wagmi";


const UserHodlings = () => {

    const account = useAccount();

    return (
        <div className="flex w-full h-full">
            <Card className="w-full relative overflow-hidden p-3">
                <h1 className="text-3xl font-medium text-center my-2">Your Holdings</h1>
                {account.isConnected && account.chain !== undefined ?
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Token</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>USDC</TableCell>
                                <TableCell>0.003</TableCell>
                                <TableCell className="text-right"><Button variant="ghost">Widthdraw</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    :

                    <div className="absolute inset-0 w-full h-full flex items-center justify-center text-sm">{account.isConnected && account.chain === undefined ? <>Switch to a compatible chain in the settings.</> : <>Connect your wallet to see your holdings.</>}</div>
                }

            </Card>
        </div>
    )
}

export default UserHodlings;