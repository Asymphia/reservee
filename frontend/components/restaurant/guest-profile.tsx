"use client"

import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import Input from "@/components/ui/input"
import { EnvelopeIcon, HomeIcon, MapPinIcon, PencilIcon, PhoneIcon } from "@heroicons/react/24/outline"
import TagsInput from "@/components/ui/tags-input"
import { useState } from "react"

const GuestProfile = () => {
    const [tags, setTags] = useState<string[]>([])

    return (
        <Card className="space-y-8">
            <Heading
                isH2
                title="Guest Profile"
                desc="This is what guests see when they search for your restaurant."
            />

            <form className="space-y-5">
                <Input
                    placeholder="Type name here..."
                    icon={ PencilIcon }
                    label="Restaurant name"
                    className="bg-foreground"
                />

                <div className="grid grid-cols-2 gap-5">
                    <Input
                        placeholder="Type city here..."
                        icon={ MapPinIcon }
                        label="City"
                        className="bg-foreground"
                    />

                    <Input
                        placeholder="Type street address here..."
                        icon={ HomeIcon }
                        label="Street address"
                        className="bg-foreground"
                    />
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <Input
                        placeholder="Type phone here..."
                        icon={ PhoneIcon }
                        label="Phone"
                        className="bg-foreground"
                    />

                    <Input
                        placeholder="Type e-mail here..."
                        icon={ EnvelopeIcon }
                        label="E-mail"
                        type="email"
                        className="bg-foreground"
                    />
                </div>

                <Input
                    placeholder="Type description here..."
                    icon={ EnvelopeIcon }
                    label="Description"
                    type="textarea"
                    className="bg-foreground"
                />

                <TagsInput
                    value={ tags }
                    onChange={ setTags }
                    label="Tags"
                    placeholder="Type tags here..."
                />
            </form>
        </Card>
    )
}

export default GuestProfile