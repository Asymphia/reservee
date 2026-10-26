import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import { Share } from "@/lib/dummy_data"
import ChartRow from "@/components/dashboard/chart-row"

const PartySize = ({ data }: { data: Share[] }) => {
    const max = Math.max(...data.map((p) => p.value))

    return (
        <Card className="space-y-6">
            <Heading isH2 title="Party size" desc="How many guests come together" />

            <ul className="space-y-3">
                {
                    data.map((p) => (
                        <ChartRow key={ p.label } label={ p.label } value={ p.value } max={ max } suffix="%" />
                    ))
                }
            </ul>
        </Card>
    )
}

export default PartySize