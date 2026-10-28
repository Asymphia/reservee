import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { ComponentProps, ComponentType } from "react"

interface InputProps {
    type?: "text" | "email" | "textarea"
    placeholder?: string
    className?: string
    icon?: ComponentType<ComponentProps<'svg'>>
    label?: string
    value?: string
    onChange?: (e: any) => void
}

const Input = ({ type="text", placeholder, className="", icon: Icon=MagnifyingGlassIcon, label, value, onChange }: InputProps) => {
    const isTextarea = type === "textarea"
    const field = "w-full min-w-0 bg-transparent placeholder:text-text-300 focus:outline-none"

    return (
        <label className="block space-y-2">
            {
                label && (
                    <span className="block text-text-700 font-semibold">
                        { label }
                    </span>
                )
            }

            <span className={`bg-background rounded-md p-3 flex gap-2 ${ isTextarea ? "items-start" : "items-center" } ${ className }`}>
                <Icon className={`size-5 shrink-0 stroke-2 ${ isTextarea ? "mt-0.5" : "" }`} />

                {
                    isTextarea
                        ? <textarea className={`${ field } resize-none`} rows={ 6 } placeholder={ placeholder } value={ value } onChange={ onChange } />
                        : <input type={ type } className={ field } placeholder={ placeholder } value={ value } onChange={ onChange } />
                }
            </span>
        </label>
    )
}

export default Input