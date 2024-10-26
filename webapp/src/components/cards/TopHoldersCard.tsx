import { Card } from "@/components/ui/card";

const TopHoldersCard = () => {
    return (
        <div className="flex w-full h-full row-span-4">
            <Card className="w-full relative overflow-hidden pt-3">
                <h1 className="text-2xl font-medium text-center">Top Holders</h1>
            </Card>
        </div>
    )
}

export default TopHoldersCard;