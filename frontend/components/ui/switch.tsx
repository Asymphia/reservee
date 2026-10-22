interface SwitchProps {
    items: string[]
    currentItem: string
}

const Switch = ({ items, currentItem }: SwitchProps) => {
    return (
        <div className="bg-background p-1 rounded-xl w-fit">
            {
                items.map(item => (
                    <button key={ item } className={`min-w-30 p-2 rounded-lg ${ currentItem === item ? "bg-primary-300 text-primary-500 font-medium" : "cursor-pointer" }` }>
                        { item }
                    </button>
                ))
            }
        </div>
    )
}

export default Switch