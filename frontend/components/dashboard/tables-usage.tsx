import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import { TableUsage } from "@/lib/dummy_data"
import ChartRow from "@/components/dashboard/chart-row"

const TablesUsage = ({ tables, count = 3 }: { tables: TableUsage[]; count?: number }) => {
    const sorted = [...tables].sort((a, b) => b.bookings - a.bookings)
    const max = sorted[0]?.bookings ?? 1

    return (
        <Card className="space-y-6">
            <Heading isH2 title="Table usages" desc="Based on current period" />

            <div className="space-y-3">
                <h3 className="text-sm">
                    Most used tables
                </h3>

                <ul className="space-y-2">
                    {
                        sorted.slice(0, count).map(t => (
                            <ChartRow key={ t.name } label={ t.name } value={ t.bookings } max={ max } />
                        ))
                    }
                </ul>
            </div>

            <div className="space-y-3">
                <h3 className="text-sm">
                    Least used tables
                </h3>

                <ul className="space-y-2">
                    {
                        sorted.slice(-count).reverse().map(t => (
                            <ChartRow key={ t.name } label={ t.name } value={ t.bookings } max={ max } />
                        ))
                    }
                </ul>
            </div>
        </Card>
    )
}

export default TablesUsage