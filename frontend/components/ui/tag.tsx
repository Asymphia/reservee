import { ReactNode } from "react"

const Tag = ({ children }: { children: ReactNode }) => {
    return (
        <div className="text-xs bg-primary-300 rounded-full text-primary-500 px-3 py-1">
            { children }
        </div>
    )
}

export default Tag