import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    type?: "primary" | "secondary" | "accent"
    className?: string
}

const Button = ({ children, type="primary", className="" }: ButtonProps) => {
    let buttonStyles = "px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2"

    switch (type) {
        case "primary":
            buttonStyles += " bg-primary-500 text-background border border-primary-500 "
            break
        case "secondary":
            buttonStyles += " bg-background text-primary-500 border border-primary-500 "
            break
        case "accent":
            buttonStyles += " bg-background text-text-700 border border-text-700 "
            break
    }

    buttonStyles += className

    return (
        <button className={ buttonStyles }>
            { children }
        </button>
    )
}

export default Button