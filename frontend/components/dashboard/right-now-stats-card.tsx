import Card from "@/components/ui/card"

const RightNowStatsCard = ({ title, desc }: { title: string, desc: string }) => {
    return (
        <Card className="bg-white/20 p-5!">
            <p>
                { desc }
            </p>

            <h3 className="text-2xl text-white">
                { title }
            </h3>
        </Card>
    )
}

export default RightNowStatsCard