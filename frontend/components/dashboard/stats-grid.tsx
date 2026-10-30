import { CalendarIcon, UserGroupIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/outline"
import StatCard from "@/components/dashboard/stat-card"

const StatsGrid = () => {
    const stats = [
        { icon: UsersIcon, title: "137", description: "Total guests", percentage: "+4%" },
        { icon: CalendarIcon, title: "44", description: "Reservations", percentage: "+4%" },
        { icon: UserGroupIcon, title: "3.1", description: "Avg. party size", percentage: "+1.2" },
        { icon: XMarkIcon, title: "7%", description: "Cancellations", percentage: "-5%" },
    ]

    return (
        <div className="grid grid-cols-4 gap-6 col-span-3">
            {
                stats.map(stat => (
                    <StatCard
                        icon={ stat.icon }
                        title={ stat.title }
                        description={ stat.description }
                        percentage={ stat.percentage }
                        key={ stat.description }
                    />
                ))
            }
        </div>
    )
}

export default StatsGrid