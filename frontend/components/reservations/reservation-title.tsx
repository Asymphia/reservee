import { Reservation } from "@/lib/dummy_data"
import Tag from "@/components/ui/tag"

const ReservationTitle = ({ reservation }: { reservation: Reservation }) => {
    return (
        <div>
            <Tag type="accent">
                { reservation.status }
            </Tag>

            <h2 className="text-xl mt-3">
                { reservation.name } { reservation.surname }
            </h2>
        </div>
    )
}

export default ReservationTitle