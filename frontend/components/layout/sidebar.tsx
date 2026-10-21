import { BellIcon } from "@heroicons/react/24/outline"
import Menu from "@/components/layout/menu"
import User from "@/components/layout/user"
import CurrentYear from "@/components/layout/current-year"

const Sidebar = () => {
    return (
        <div className="sticky top-0 h-dvh w-60 shrink-0 overflow-y-auto bg-background flex flex-col justify-between py-8 rounded-r-xl">
            <div className="space-y-20">
                <div className="flex items-center gap-3 px-4">
                    <div className="size-10 bg-primary-500 flex items-center justify-center rounded-lg">
                        <BellIcon className="text-background size-6 stroke-2" />
                    </div>

                    <header>
                        <h3>
                            Reservee
                        </h3>

                        <p className="text-sm">
                            Reservations System
                        </p>
                    </header>
                </div>

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