import Heading from "@/components/ui/heading"
import {user, weekdayShare} from "@/lib/dummy_data"
import CurrentDate from "@/components/layout/current-year"
import Switch from "@/components/ui/switch"
import StatsGrid from "@/components/dashboard/stats-grid"
import GuestsChart from "@/components/dashboard/guests-chart"
import RightNowStats from "@/components/dashboard/right-now-stats"
import WeekdayShare from "@/components/dashboard/weekday-share";

const Dashboard = () => {
    const week = [
        { label: "Mon", current: 38,   previous: 34 },
        { label: "Tue", current: 52,   previous: 48 },
        { label: "Wed", current: 47,   previous: 50 },
        { label: "Thu", current: null, previous: 55 },
        { label: "Fri", current: null, previous: 79 },
        { label: "Sat", current: null, previous: 101 },
        { label: "Sun", current: null, previous: 70 },
    ]


    return (
        <div className="space-y-11">
            <Heading
                title="Dashboard"
                desc={
                    <>
                        Welcome back, { user.name }. Here is how { user.restaurant } is doing today, <CurrentDate full />.
                    </>
                }
                leftPanel={
                    <Switch
                        items={["Week", "Month", "Year"]}
                        currentItem="Week"
                    />
                }
            />

            <StatsGrid />

            <div className="grid grid-cols-[1.5fr_1fr] gap-6">
                <GuestsChart data={ week } />

                <div className="space-y-6">
                    <RightNowStats />

                    <WeekdayShare data={ weekdayShare } />
                </div>
            </div>
        </div>
    )
}

export default Dashboard