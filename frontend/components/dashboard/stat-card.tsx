import Card from "@/components/ui/card"
import { ComponentProps, ComponentType } from "react"

interface StatCardProps {
    icon: ComponentType<ComponentProps<'svg'>>
    title: string
    description: string
    percentage: string
}

const StatCard = ({ icon: Icon, title, description, percentage }: StatCardProps) => {
    const isNegative = percentage.startsWith("-")

    return (
        <Card className="flex items-center gap-6">
            <div className="w-22 aspect-square bg-primary-300 rounded-full flex items-center justify-center">
                <Icon className="text-primary-500 stroke-2 size-8" />
            </div>

            <div>
                <h2 className="text-4xl mb-1">
                    { title }
                </h2>

                <p>
                    { description }
                </p>

                <p>
                    <span className={`font-semibold ${ isNegative ? "text-warning-500" : "text-primary-500" }`}>
                        { percentage }
                    </span>
                    {" "} vs previous period
                </p>
            </div>
        </Card>
    )
}

export default StatCard