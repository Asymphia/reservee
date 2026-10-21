import { BellIcon } from "@heroicons/react/24/outline"

const TopLogo = () => {
    return (
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
    )
}

export default TopLogo