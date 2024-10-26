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
import { Button } from "@/components/ui/button";


const UserHodlings = () => {
    return (
        <div className="flex w-full h-full">
            <Card className="w-full relative overflow-hidden p-3">
                <h1 className="text-3xl font-medium text-center mb-2">Your Holdings</h1>

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

            </Card>
        </div>
    )
}

export default UserHodlings;