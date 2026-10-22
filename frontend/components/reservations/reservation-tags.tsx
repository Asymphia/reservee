import { Reservation } from "@/lib/dummy_data"
import TextIcon from "@/components/ui/text-icon"
import { CalendarIcon, ClockIcon, PencilSquareIcon, UserGroupIcon } from "@heroicons/react/24/outline"

const ReservationTags = ({ reservation }: { reservation: Reservation }) => {
    return (
        <div className="grid grid-cols-4 place-items-center">
            <TextIcon text={ reservation.table } icon={ PencilSquareIcon } />
            <TextIcon text={ reservation.numberOfPeople + " people" } icon={ UserGroupIcon } />
            <TextIcon text={ reservation.date } icon={ CalendarIcon } />
            <TextIcon text={ reservation.time } icon={ ClockIcon } />
        </div>
    )
}

export default ReservationTags