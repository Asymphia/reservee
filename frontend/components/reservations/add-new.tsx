import Button from "@/components/ui/button"
import { PlusIcon } from "@heroicons/react/24/outline"

const AddNew = ({ text="Add new reservations", className="", small=false }: { text?: string, className?: string, small?: boolean }) => {
    return (
        <div className={`border border-dashed border-primary-500 flex flex-col items-center justify-center rounded-xl p-8 ${ small ? "gap-2" : "gap-3" } ${ className }`}>
            <Button className={ small ? "p-1!" : "p-2!" }>
                <PlusIcon className={`stroke-2 ${ small ? "size-4" : "size-8" }`} />
            </Button>

            <h2 className={ small ? "text-lg" : "text-2xl" }>
                { text }
            </h2>
        </div>
    )
}

export default AddNew