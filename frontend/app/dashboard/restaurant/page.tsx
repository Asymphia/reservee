import GuestProfile from "@/components/restaurant/guest-profile"
import Photos from "@/components/restaurant/photos"
import GuestsLimit from "@/components/restaurant/guests-limit"

const RestaurantPage = () => {
    return (
        <div className="grid grid-cols-[1.4fr_1fr] gap-6 items-start">
            <GuestProfile />

            <div className="space-y-6">
                <Photos />

                <GuestsLimit />
            </div>
        </div>
    )
}

export default RestaurantPage