import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import RightNowStatsCard from "@/components/dashboard/right-now-stats-card";

const RightNowStats = () => {
    const stats = [
        { title: "52", desc: "Total" },
        { title: "31", desc: "Taken" },
        { title: "21", desc: "Available" }
    ]

    return (
        <Card className="bg-primary-500 text-white [&_h2]:text-white space-y-6">
            <Heading
                title="Right now"
                desc="Seats at the tables this moment"
                isH2
             />

            <div className="grid grid-cols-3 gap-4">
                {
                    stats.map(stat => (
                        <RightNowStatsCard title={ stat.title } desc={ stat.desc } key={ stat.desc } />
                    ))
                }
            </div>
        </Card>
    )
}

export default RightNowStats