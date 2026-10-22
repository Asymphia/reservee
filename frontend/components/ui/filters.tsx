import { FunnelIcon } from "@heroicons/react/24/outline"

const Filters = () => {
    return (
        <label className="bg-background rounded-md p-3 flex items-center gap-2">
            <span>
                Filters
            </span>

            <FunnelIcon className="size-5 stroke-2" />
        </label>
    )
}

export default Filters