import { ChevronDownIcon } from "@heroicons/react/24/outline"

const SortBy = () => {
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm">
                Sort by:
            </span>

            <label className="bg-background rounded-md p-3 flex items-center gap-2">
                <span>
                    Date: soonest first
                </span>

                <ChevronDownIcon className="size-5 stroke-2" />
            </label>
        </div>
    )
}

export default SortBy