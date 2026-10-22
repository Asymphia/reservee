import { tables } from "@/lib/dummy_data"
import TableCard from "@/components/tables/table-card"

const TableGrid = () => {
    return (
        <section className="grid grid-cols-4 gap-6">
            {
                tables.map(table => (
                    <TableCard key={ table.name } table={ table } />
                ))
            }
        </section>
    )
}

export default TableGrid