import { Suspense } from "react"
import { cacheLife } from "next/cache"
import { connection } from "next/server"

const TIME_ZONE = "Europe/Warsaw"

const formatFull = (date: Date) => {
    const parts = Object.fromEntries(
        new Intl.DateTimeFormat("en-US", {
            timeZone: TIME_ZONE,
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
        }).formatToParts(date).map((p) => [p.type, p.value])
    )

    return `${parts.weekday} ${parts.day} ${parts.month} ${parts.year}`
}

const Year = async () => {
    "use cache"
    cacheLife("days")

    return <>{new Intl.DateTimeFormat("en-US", { timeZone: TIME_ZONE, year: "numeric" }).format(new Date())}</>
}


const FullDate = async () => {
    await connection()

    return <>{formatFull(new Date())}</>
}

const CurrentDate = ({ full = false }: { full?: boolean }) => {
    if (!full) return <Year />

    return (
        <Suspense fallback={<span className="invisible">Wed 00 Oct 0000</span>}>
            <FullDate />
        </Suspense>
    )
}

export default CurrentDate