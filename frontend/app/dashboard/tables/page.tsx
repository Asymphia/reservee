import Heading from "@/components/ui/heading"
import Button from "@/components/ui/button"
import { PlusIcon } from "@heroicons/react/24/outline"
import Input from "@/components/ui/input"
import Switch from "@/components/ui/switch"
import TableGrid from "@/components/tables/table-grid"

const TablesPage = () => {
    return (
        <div className="space-y-11">
            <Heading
                title="Tables Management"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id malesuada massa. Mauris lacus urna, lacinia vitae nisi quis, tincidunt vulputate quam."
                leftPanel={
                    <Button>
                        <PlusIcon className="size-5 stroke-2" />
                        Add table type
                    </Button>
                }
            />

            <div className="flex items-center gap-6">
                <Input placeholder="Search for a table..." className="max-w-75" />

                <Switch
                    items={["All", "Available", "Taken"]}
                    currentItem="All"
                />
            </div>

            <TableGrid />
        </div>
    )
}

export default TablesPage