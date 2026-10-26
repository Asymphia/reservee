import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import { Share } from "@/lib/dummy_data"

export const shade = (i: number) => {
    return `color-mix(in srgb, var(--primary-500) ${ Math.max(100 - i * 20, 20) }%, transparent)`
}


const ReservationStatus = ({ data }: { data: Share[] }) => {
    let from = 0

    const gradient = data.map((s, i) => {
        const start = from
        from += s.value
        return `${ shade(i) } ${ start }% ${ from }%`
    }).join(", ")

    return (
        <Card className="flex flex-col gap-6">
            <Heading isH2 title="Reservation status" desc="All reservations in the selected period" />

            <div className="relative flex-1 min-h-32">
                <div className="absolute inset-0 flex items-center gap-8">
                    <div
                        className="relative h-full max-h-52 aspect-square shrink-0 rounded-full"
                        style={{ background: `conic-gradient(${ gradient })` }}
                    >
                        <div className="absolute inset-[15%] rounded-full bg-background flex flex-col items-center justify-center">
                            <strong className="text-2xl text-text-700 font-jakarta">
                                { data[0].value }%
                            </strong>

                            <span className="text-xs">
                                { data[0].label.toLowerCase() }
                            </span>
                        </div>
                    </div>

                    <ul className="flex-1 space-y-1">
                        {
                            data.map((s, i) => (
                                <li key={ s.label } className="flex items-center justify-between gap-4">
                                    <span className="flex items-center gap-3">
                                        <span className="size-3 rounded-full" style={{ background: shade(i) }} />
                                        { s.label }
                                    </span>

                                    <strong className="text-text-700">
                                        { s.value }%
                                    </strong>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Card>
    )
}

export default ReservationStatus