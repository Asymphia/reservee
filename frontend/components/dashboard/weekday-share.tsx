import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import { WeekdayShare as Share } from "@/lib/dummy_data"

const WeekdayShare = ({ data }: { data: Share[] }) => {
    const max = Math.max(...data.map((d) => d.value))

    return (
        <Card className="space-y-6">
            <Heading
                isH2
                title="Reservations per weekday"
                desc="Share of bookings made for each day"
            />

            <ul className="flex gap-3">
                {
                    data.map(d => (
                        <li key={ d.day } className="flex-1 flex flex-col items-center gap-2 text-xs">
                            <span>
                                { d.value }%
                            </span>

                            <div className="w-full h-36 rounded-lg bg-foreground flex items-end">
                                <div
                                    className="w-full rounded-lg bg-primary-500"
                                    style={{ height: `${(d.value / max) * 100}%` }}
                                />
                            </div>

                            <span className="font-bold text-text-700">
                                { d.day }
                            </span>
                        </li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default WeekdayShare