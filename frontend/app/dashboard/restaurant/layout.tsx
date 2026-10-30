import { user } from "@/lib/dummy_data"
import Button from "@/components/ui/button"
import { CheckIcon } from "@heroicons/react/24/outline"
import Heading from "@/components/ui/heading"
import Switch from "@/components/ui/switch"
import { ReactNode } from "react"

const RestaurantLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="space-y-11">
            <Heading
                title="Edit Restaurant"
                desc={`Manage how guests see ${ user.restaurant }: photos, tags, description and menu. Set hourly limits and check how full your day is.`}
                leftPanel={
                    <Button>
                        Save Changes

                        <CheckIcon className="size-5 stroke-2" />
                    </Button>
                }
            />

            <Switch
                items={["Details", "Menu", "Reservations"]}
                currentItem="Details"
            />

            { children }
        </div>
    )
}

export default RestaurantLayout