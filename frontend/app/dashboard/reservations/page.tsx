import Button from "@/components/ui/button"
import { PlusIcon } from "@heroicons/react/24/outline"
import Heading from "@/components/ui/heading"
import Input from "@/components/ui/input"
import Switch from "@/components/ui/switch"
import ReservationGrid from "@/components/reservations/reservation-grid"
import SortBy from "@/components/ui/sort-by"
import Filters from "@/components/ui/filters"

const ReservationPage = () => {
    return (
        <div className="space-y-11">
            <Heading
                title="Reservations Management"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id malesuada massa. Mauris lacus urna, lacinia vitae nisi quis, tincidunt vulputate quam."
                leftPanel={
                    <Button>
                        <PlusIcon className="size-5 stroke-2" />
                        Add a reservation
                    </Button>
                }
            />

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Input placeholder="Search for a table..." className="max-w-75" />

                    <Switch
                        items={["All", "Pending", "Accepted", "Cancelled", "No-show"]}
                        currentItem="All"
                    />
                </div>



                <div className="flex items-center gap-6">
                    <SortBy />

                    <Filters />
                </div>
            </div>

            <ReservationGrid />
        </div>
    )
}

export default ReservationPage