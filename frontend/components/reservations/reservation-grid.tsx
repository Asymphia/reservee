import { reservations } from "@/lib/dummy_data"
import ReservationCard from "@/components/reservations/reservation-card"
import AddReservation from "@/components/reservations/add-reservation"

const ReservationGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            <AddReservation />

            {
                reservations.map((reservation, i) => (
                    <ReservationCard reservation={ reservation } key={ i } />
                ))
            }
        </div>
    )
}

export default ReservationGrid