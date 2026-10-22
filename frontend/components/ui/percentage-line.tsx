const PercentageLine = ({ percentage }: { percentage: number }) => {
    const percentageNew = percentage > 100 ? 100 : percentage
    const isMax = percentageNew === 100

    return (
        <div className="w-full h-1.5 rounded-full bg-text-500 relative">
            <div
                className={`absolute rounded-full left-0 top-0 bottom-0 ${ isMax ? "bg-warning-500" : "bg-primary-500" }`}
                style={{ width: `${ percentageNew }%` }}
            />
        </div>
    )
}

export default PercentageLine