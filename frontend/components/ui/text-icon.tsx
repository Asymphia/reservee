import { ComponentProps, ComponentType } from "react"

interface TextIconProps {
    text: string
    icon: ComponentType<ComponentProps<'svg'>>
}

const TextIcon = ({ text, icon: Icon }: TextIconProps) => {
    return (
        <div className="flex items-center gap-2">
            <Icon className="size-5 stroke-2" />

            <span>
                { text }
            </span>
        </div>
    )
}

export default TextIcon