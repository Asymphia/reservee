import Heading from "@/components/ui/heading"
import { user } from "@/lib/dummy_data"
import Button from "@/components/ui/button"
import { CheckIcon } from "@heroicons/react/24/outline"
import Switch from "@/components/ui/switch"
import Card from "@/components/ui/card"
import NumberInput from "@/components/ui/number-input";

const RestaurantReservationPage = () => {
    const reservationLengthRules = [
        { rule: "1-2 guests", desc: "Ends 135 min after the start" },
        { rule: "3-4 guests", desc: "Ends 135 min after the start" },
        { rule: "5-6 guests", desc: "Ends 135 min after the start" },
        { rule: "7-8 guests", desc: "Ends 135 min after the start" },
        { rule: "9+ guests", desc: "Ends 135 min after the start" },
        { rule: "Turnover buffer", desc: "Time to clear and reset a table before the next guests." },
    ]

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

            <Card className="space-y-8">
                <Heading
                    isH2
                    title="Reservation length"
                    desc="Default length by number of guests. You can still change the end time of any single reservation in the Reservations panel."
                />

                <div>
                    {
                        reservationLengthRules.map((rule, i) => (
                            <div className={`flex items-center justify-between py-4 border-text-500 ${ i === reservationLengthRules.length - 1 ? "border-y" : "border-t" }`} key={ i }>
                                <div>
                                    <h3 className="text-lg">
                                        { rule.rule }
                                    </h3>

                                    <p>
                                        { rule.desc }
                                    </p>
                                </div>

                                <NumberInput />
                            </div>
                        ))
                    }
                </div>
            </Card>
        </div>
    )
}

export default RestaurantReservationPage