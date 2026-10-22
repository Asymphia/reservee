import { ReactNode } from "react"

interface TagProps {
    children: ReactNode
    type?: "primary" | "secondary" | "accent" | "warning"
}

const Tag = ({ children, type="primary" }: TagProps) => {
    let tagStyles = "text-xs rounded-full px-3 py-1 w-fit"

    switch(type) {
        case "primary":
            tagStyles += " bg-primary-300 text-primary-500 "
            break
        case "secondary":
            tagStyles += " bg-text-700/15 text-text-700 "
            break
        case "accent":
            tagStyles += " bg-text-300/15 text-text-300 "
            break
        case "warning":
            tagStyles += " bg-warning-300 text-warning-500 "
            break
    }

    return (
        <div className={ tagStyles }>
            { children }
        </div>
    )
}

export default Tag