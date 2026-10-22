import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

interface InputProps {
    type?: "text"
    placeholder?: string
    className?: string
}

const Input = ({ type="text", placeholder, className="" }: InputProps) => {
    return (
        <label className={`bg-background rounded-md p-3 flex items-center gap-2 ${ className }`}>
            <MagnifyingGlassIcon className="size-5 stroke-2" />

            <input
                type={ type }
                className="placeholder:text-text-300 focus:outline-none"
                placeholder={ placeholder }
            />
        </label>
    )
}

export default Input