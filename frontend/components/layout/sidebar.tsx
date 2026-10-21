import Menu from "@/components/layout/menu"
import User from "@/components/layout/user"
import CurrentYear from "@/components/layout/current-year"
import TopLogo from "@/components/layout/top-logo"

const Sidebar = () => {
    return (
        <div className="sticky top-0 h-dvh w-60 shrink-0 overflow-y-auto bg-background flex flex-col justify-between py-8 rounded-r-xl shadow-md">
            <div className="space-y-20">
                <TopLogo />

                <Menu />
            </div>

            <div className="space-y-8">
                <User />

                <p className="text-sm flex flex-col gap-1 px-4">
                    <strong>
                        Restaurant Reservation System.
                    </strong>
                    <span>
                    &copy; <CurrentYear /> All Rights Reserved
                </span>
                </p>
            </div>
        </div>
    )
}

export default Sidebar