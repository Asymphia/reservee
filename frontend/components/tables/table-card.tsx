import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import Tag from "@/components/ui/tag"
import { TableType } from "@/lib/dummy_data"
import Image from "next/image"
import tablePlaceholder from "@/assets/table-placeholder.svg"
import PercentageLine from "@/components/ui/percentage-line";
import Button from "@/components/ui/button";

const TableCard = ({ table }: { table: TableType }) => {
    const percentage = table.available * 100 / table.numberOfTables

    return (
        <Card className="space-y-6">
            <Heading
                title={ table.name }
                desc={` ${ table.numberOfSits } sits · ${ table.numberOfTables } tables ` }
                isH2={ true }
                leftPanel={
                    <Tag>
                        Available: {" "}
                        { table.available }
                    </Tag>
                }
            />

            <div className="rounded-xl bg-foreground h-50 p-4">
                <div className="relative h-full w-full">
                    <Image
                        src={ tablePlaceholder }
                        alt="Preview of a table"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <PercentageLine percentage={ percentage } />

            <div className="w-full flex items-center gap-2">
                <Button type="accent" className="w-full">
                    Delete
                </Button>

                <Button type="secondary" className="w-full">
                    Edit
                </Button>
            </div>
        </Card>
    )
}

export default TableCard