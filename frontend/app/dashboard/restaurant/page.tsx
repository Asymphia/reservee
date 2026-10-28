import Button from "@/components/ui/button"
import { CheckIcon } from "@heroicons/react/24/outline"
import Heading from "@/components/ui/heading"
import { user } from "@/lib/dummy_data"
import Switch from "@/components/ui/switch"
import GuestProfile from "@/components/restaurant/guest-profile"
import Photos from "@/components/restaurant/photos"

const RestaurantPage = () => {
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
                items={["Details", "Menu", "Capacity", "Reservations"]}
                currentItem="Details"
            />

            <div className="grid grid-cols-[1.5fr_1fr] gap-6 items-start">
                <GuestProfile />

                <Photos />
            </div>
        </div>
    )
}

export default RestaurantPage