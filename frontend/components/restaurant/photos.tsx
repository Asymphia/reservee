import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import AddNew from "@/components/reservations/add-new"

const Photos = () => {
    return (
        <Card className="space-y-8">
            <Heading
                isH2
                title="Photos"
                desc="The first photo is the cover shown in search results."
            />

            <div className="space-y-5">
                <div className="grid grid-cols-2 grid-rows-2 gap-5 h-80">
                    <div className="bg-foreground rounded-lg row-span-2" />

                    <div className="bg-foreground rounded-lg" />

                    <div className="bg-foreground rounded-lg" />
                </div>

                <AddNew text="Upload" className="flex-row" small />
            </div>
        </Card>
    )
}

export default Photos