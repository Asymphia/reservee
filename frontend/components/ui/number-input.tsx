import Button from "@/components/ui/button"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"

const NumberInput = () => {
    return (
        <div className="flex items-center gap-3">
            <Button isSmall type="accent" className="p-3!">
                <MinusIcon className="size-3 stroke-2" />
            </Button>

            <p className="text-xl font-bold text-primary-500">
                4
            </p>

            <Button isSmall type="accent" className="p-3!">
                <PlusIcon className="size-3 stroke-2" />
            </Button>
        </div>
    )
}

export default NumberInput