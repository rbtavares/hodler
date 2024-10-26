import { Card } from "@/components/ui/card";

const UserHodlings = () => {
    return (
        <div className="flex w-full h-full row-span-5">
            <Card className="w-full relative overflow-hidden pt-3">
                <h1 className="text-2xl font-medium text-center">What are you holding?</h1>
            </Card>
        </div>
    )
}

export default UserHodlings;