import { user } from "@/lib/dummy_data"
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline"

const User = () => {


    return (
        <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
                <div className="bg-foreground rounded-full size-10 text-text-700 font-bold flex items-center justify-center">
                    { (user.name[0] + user.surname[0]).toUpperCase() }
                </div>

                <div>
                    <h3>
                        { user.name + " " + user.surname }
                    </h3>

                    <p className="text-sm">
                        { user.restaurant }
                    </p>
                </div>
            </div>

            <ArrowLeftStartOnRectangleIcon className="size-5 text-text-700 stroke-2 -scale-x-90" />
        </div>
    )
}

export default User