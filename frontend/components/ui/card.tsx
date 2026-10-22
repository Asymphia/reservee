import { ReactNode } from "react"

const Card = ({ children, className="" }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`bg-background shadow-sm rounded-xl px-8 py-6 ${ className }`}>
            { children }
        </div>
    )
}

export default Card