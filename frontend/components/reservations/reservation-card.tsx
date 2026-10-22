import Card from "@/components/ui/card"
import { Reservation } from "@/lib/dummy_data"
import TextIcon from "@/components/ui/text-icon"
import {
    EnvelopeIcon,
    PhoneIcon
} from "@heroicons/react/24/outline"
import Button from "@/components/ui/button"
import ReservationTags from "@/components/reservations/reservation-tags"
import ReservationTitle from "@/components/reservations/reservation-title"
import TableWithBg from "@/components/ui/table-with-bg"

const ReservationCard = ({ reservation }: { reservation: Reservation }) => {
    return (
        <Card className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                    <ReservationTitle reservation={ reservation } />

                    <div className="space-y-3">
                        <TextIcon text={ reservation.email } icon={ EnvelopeIcon } />
                        <TextIcon text={ reservation.phone } icon={ PhoneIcon } />
                    </div>

                    <div className="flex items-center gap-2">
                        <Button type="accent" className="w-full">
                            Decline
                        </Button>
                        <Button type="secondary" className="w-full">
                            Accept
                        </Button>
                    </div>
                </div>

                <TableWithBg />
            </div>

            <ReservationTags reservation={ reservation } />
        </Card>
    )
}

export default ReservationCard