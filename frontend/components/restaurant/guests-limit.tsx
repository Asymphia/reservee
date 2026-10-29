import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import NumberInput from "@/components/ui/number-input"

const GuestsLimit = () => {
    return (
        <Card>
            <Heading
                isH2
                title="Default limit"
                desc="Applied to every hour you have not changed by hand."
            />

            <div className="flex items-center gap-4 mt-8 mb-5">
                <NumberInput />

                <p className="font-medium">
                    Guests per hour
                </p>
            </div>

            <p>
                Total seats in your tables: {" "}
                <strong>52</strong>.
                Limits above this number will never be reached.
            </p>
        </Card>
    )
}

export default GuestsLimit