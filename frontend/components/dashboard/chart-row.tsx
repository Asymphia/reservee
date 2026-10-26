type ChartRowProps = {
    label: string
    value: number
    max: number
    suffix?: string
    className?: string
}

const ChartRow = ({ label, value, max, suffix = "", className = "bg-primary-500" }: ChartRowProps) => (
    <li className="grid grid-cols-[6rem_1fr_2.5rem] items-center gap-4">
        <p>
            { label }
        </p>

        <div className="h-2 rounded-full bg-text-500">
            <div className={`h-full rounded-full ${ className }`} style={{ width: `${ (value / max) * 100 }%` }} />
        </div>

        <strong className="text-right text-text-700">
            { value }{ suffix }
        </strong>
    </li>
)

export default ChartRow