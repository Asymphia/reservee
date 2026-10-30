import { BanknotesIcon, DocumentTextIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import { MenuItem } from "@/lib/dummy_data"

interface MenuItemRowProps {
    item: MenuItem
    onChange: (item: MenuItem) => void
    onDelete: () => void
}

const MenuItemRow = ({ item, onChange, onDelete }: MenuItemRowProps) => {
    return (
        <div className="space-y-5 border-t border-text-500 py-4 last:border-y">
            <div className="flex items-center gap-5">
                <div className="flex-1 min-w-0">
                    <Input
                        icon={ PencilIcon }
                        className="bg-foreground!"
                        placeholder="Type name here..."
                        value={ item.name }
                        onChange={ e => onChange({ ...item, name: e.target.value }) }
                    />
                </div>

                <div className="w-30 shrink-0">
                    <Input
                        icon={ BanknotesIcon }
                        className="bg-foreground!"
                        placeholder="0 PLN"
                        value={ item.price }
                        onChange={ e => onChange({ ...item, price: e.target.value.replace(/[^\d.,]/g, "") }) }
                    />
                </div>

                <Button type="accent" isSmall className="p-3!" onClick={ onDelete }>
                    <XMarkIcon className="size-4 stroke-2" />
                </Button>
            </div>

            <Input
                icon={ DocumentTextIcon }
                className="bg-foreground! py-2! text-sm"
                placeholder="Type short description here..."
                value={ item.description }
                type="textarea"
                onChange={ e => onChange({ ...item, description: e.target.value }) }
            />
        </div>
    )
}

export default MenuItemRow