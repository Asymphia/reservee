"use client"

import { useState } from "react"
import { PlusIcon, TagIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import Tag from "@/components/ui/tag"

type TagsInputProps = {
    value: string[]
    onChange: (tags: string[]) => void
    label?: string
    placeholder?: string
    max?: number
}

const TagsInput = ({ value, onChange, label, placeholder, max=10 }: TagsInputProps) => {
    const [draft, setDraft] = useState("")

    const tag = draft.trim()
    const isDuplicate = value.some(t => t.toLowerCase() === tag.toLowerCase())
    const canAdd = tag !== "" && !isDuplicate && value.length < max

    const add = () => {
        if (!canAdd) return

        onChange([...value, tag])
        setDraft("")
    }

    return (
        <div className="space-y-5">
            <p className="text-text-700 font-semibold">
                { label }
            </p>

            <div className="flex items-stretch gap-4">
                <div className="flex-1">
                    <Input
                        icon={ TagIcon }
                        placeholder={ placeholder }
                        value={ draft }
                        onChange={ e => setDraft(e.target.value) }
                    />
                </div>

                <Button onClick={ add } disabled={ !canAdd }>
                    Add
                    <PlusIcon className="size-5 stroke-2" />
                </Button>
            </div>

            {
                value.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {
                            value.map(t => (
                                <Tag key={ t } className="flex items-center gap-1">
                                    { t }

                                    <button
                                        type="button"
                                        onClick={ () => onChange(value.filter(x => x !== t)) }
                                        className="cursor-pointer"
                                    >
                                        <XMarkIcon className="size-4 stroke-2" />
                                    </button>
                                </Tag>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default TagsInput