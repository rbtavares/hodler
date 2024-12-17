import { TableRow, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { deposit } from "@/types";

interface IUserDeposit {
    deposit: deposit
}

/**
 * Format seconds to XXd XXh XXm XXs
 * @param seconds seconds to format
 * @returns formatted seconds
 */
const formatSeconds = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
};

/**
 * Obtain the seconds left to withdraw a deposit
 * @param unlockTime current deposit unlock time
 * @returns seconds left until withdraw is possible
 */
const secondsToWithdraw = (unlockTime: number) => {
    return unlockTime - Math.round(new Date().getTime() / 1000);
}

const UserDeposit = ({ deposit }: IUserDeposit) => {

    const seconds = secondsToWithdraw(Number(deposit.unlockTime));

    return (
        <TableRow>
            <TableCell>Ether</TableCell>
            <TableCell>{(Number(deposit.amount) / 10 ** 18).toFixed(6)}</TableCell>
            <TableCell className="text-right">
                <Button
                    variant="link"
                    size="inline"
                    disabled={seconds > 0}
                >
                    {seconds <= 0 ? <>Withdraw</> : formatSeconds(seconds)}
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default UserDeposit