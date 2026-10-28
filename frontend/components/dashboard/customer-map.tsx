import { Fragment } from "react"
import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import { CustomerMapData } from "@/lib/dummy_data"

const CustomerMap = ({ data }: { data: CustomerMapData }) => {
    const max = Math.max(...data.values.flat())

    const shade = (v: number) => {
        return `color-mix(in srgb, var(--primary-500) ${ 20 + (v / max) * 80 }%, transparent)`
    }

    return (
        <Card className="space-y-6 col-span-2">
            <Heading
                isH2
                title="Customer map"
                desc="When guests arrive, average guests per hour and weekday."
            />

            <div className="grid grid-cols-[3rem_repeat(7,1fr)] gap-1 text-xs">
                <span />

                {
                    data.days.map(d => (
                        <span key={ d } className="text-center font-bold text-text-700">
                            { d }
                        </span>
                    ))
                }

                {
                    data.hours.map((hour, row) => (
                        <Fragment key={ hour }>
                            <span className="self-center">{ hour }:00</span>

                            {
                                data.values[row].map((v, col) => (
                                    <div
                                        key={ col }
                                        className="h-7 rounded-md"
                                        style={{ background: shade(v) }}
                                    />
                                ))
                            }
                        </Fragment>
                    ))
                }
            </div>
        </Card>
    )
}

export default CustomerMap