import Button from "@/components/ui/button"
import { PlusIcon } from "@heroicons/react/24/outline"

const AddReservation = () => {
    return (
        <div className="border border-dashed border-primary-500 flex flex-col items-center justify-center gap-3 rounded-xl">
            <Button className="p-2!">
                <PlusIcon className="size-8 stroke-2" />
            </Button>

            <h2 className="text-2xl">
                Add new reservation
            </h2>
        </div>
    )
}

export default AddReservation