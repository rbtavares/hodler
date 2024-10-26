import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const LatestHoldsCard = () => {
    return (
        <div className="flex w-full h-full col-span-2">
            <Card className="w-full relative overflow-hidden p-3">
                <h1 className="text-3xl font-medium text-center mb-2">Latest Holdings</h1>

                <Table>
                    <TableCaption>No active holdings.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-2/6">Holder</TableHead>
                            <TableHead className="w-1/6">Token</TableHead>
                            <TableHead className="w-1/6">Amount</TableHead>
                            <TableHead className="w-2/6 text-right">Unlock Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-mono">0xf39Fd6e51aad88F6F4ce6a...</TableCell>
                            <TableCell>USDC</TableCell>
                            <TableCell className="font-mono">0.003</TableCell>
                            <TableCell className="text-right">Dec 9, 2024 @ 19:54</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">0xf39Fd6e51aad88F6F4ce6a...</TableCell>
                            <TableCell>USDC</TableCell>
                            <TableCell className="font-mono">0.003</TableCell>
                            <TableCell className="text-right">Dec 9, 2024 @ 19:54</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">0xf39Fd6e51aad88F6F4ce6a...</TableCell>
                            <TableCell>USDC</TableCell>
                            <TableCell className="font-mono">0.003</TableCell>
                            <TableCell className="text-right">Dec 9, 2024 @ 19:54</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">0xf39Fd6e51aad88F6F4ce6a...</TableCell>
                            <TableCell>USDC</TableCell>
                            <TableCell className="font-mono">0.003</TableCell>
                            <TableCell className="text-right">Dec 9, 2024 @ 19:54</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-mono">0xf39Fd6e51aad88F6F4ce6a...</TableCell>
                            <TableCell>USDC</TableCell>
                            <TableCell className="font-mono">0.003</TableCell>
                            <TableCell className="text-right">Dec 9, 2024 @ 19:54</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </Card>
        </div>
    )
}

export default LatestHoldsCard;