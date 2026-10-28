import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import Tag from "@/components/ui/tag"
import { reservations } from "@/lib/dummy_data"
import Button from "@/components/ui/button"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const PendingReservations = () => {
    const pendingReservations = reservations.filter(r => r.status === "Pending")

    return (
        <Card className="space-y-6">
            <Heading
                isH2
                title="Needs your answear"
                desc="Pending reservations"
                leftPanel={
                    <Tag>
                        { pendingReservations.length } pending
                    </Tag>
                }
            />

            <div>
                {
                    pendingReservations.slice(0, 4).map((reservation, i) => (
                        <div key={ i } className={`flex gap-2 justify-between items-center py-3 border-text-500 ${ i === (reservations.length - 1) ? "border-y" : "border-t" }`}>
                            <div>
                                <h3>
                                    { reservation.name } { reservation.surname }
                                </h3>

                                <div className="text-sm">
                                    { reservation.date } · { reservation.time } · { reservation.numberOfPeople } guests
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                <Button type="accent" isSmall>
                                    Decline
                                </Button>

                                <Button type="secondary" isSmall>
                                    Accept
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Button className="ml-auto">
                View all

                <ArrowUpRightIcon className="size-5 stroke-2" />
            </Button>
        </Card>
    )
}

export default PendingReservations