import { Card } from "@/components/ui/card";

const TopHoldersCard = () => {
    return (
        <div className="flex w-full col-span-2">
            <Card className="w-full relative overflow-hidden p-3">
                <h1 className="text-3xl font-medium text-center mb-2">Top Holders</h1>
            </Card>
        </div>
    )
}

export default TopHoldersCard;