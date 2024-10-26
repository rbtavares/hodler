import { Card } from "@/components/ui/card";

const LatestHoldsCard = () => {
    return (
        <div className="flex w-full h-full row-span-7">
            <Card className="w-full relative overflow-hidden pt-3">
                <h1 className="text-2xl font-medium text-center">Latest Holdings</h1>
            </Card>
        </div>
    )
}

export default LatestHoldsCard;