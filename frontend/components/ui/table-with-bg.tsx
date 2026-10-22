import Image from "next/image"
import tablePlaceholder from "@/assets/table-placeholder.svg"

const TableWithBg = ({ className="" }: { className?: string }) => {
    return (
        <div className={`rounded-xl bg-foreground p-4 ${ className }`}>
            <div className="relative h-full w-full">
                <Image
                    src={ tablePlaceholder }
                    alt="Preview of a table"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default TableWithBg