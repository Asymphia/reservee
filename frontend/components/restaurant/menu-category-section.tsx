import { PencilIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import { MenuCategory, MenuItem } from "@/lib/dummy_data"
import MenuItemRow from "@/components/restaurant/menu-row-item"

interface MenuCategorySectionProps {
    category: MenuCategory
    isEditing: boolean
    onChange: (category: MenuCategory) => void
    onDelete: () => void
    onToggleEdit: () => void
}

const MenuCategorySection = ({ category, isEditing, onChange, onDelete, onToggleEdit }: MenuCategorySectionProps) => {
    const changeItem = (index: number, item: MenuItem) => {
        onChange({ ...category, items: category.items.map((x, i) => i === index ? item : x) })
    }

    const addItem = () => {
        onChange({ ...category, items: [...category.items, { name: "", description: "", price: "" }] })
    }

    const deleteItem = (index: number) => {
        onChange({ ...category, items: category.items.filter((_, i) => i !== index) })
    }

    return (
        <section>
            <div className="flex items-center justify-between gap-4 border-b border-foreground pb-3">
                {
                    isEditing ? (
                        <div className="flex-1">
                            <Input
                                icon={ PencilIcon }
                                className="bg-foreground!"
                                placeholder="Category name"
                                value={ category.name }
                                onChange={ e => onChange({ ...category, name: e.target.value }) }
                            />
                        </div>
                    ) : (
                        <h3 className="text-xl">
                            { category.name }
                        </h3>
                    )
                }

                <div className="flex gap-3">
                    <Button type="accent" isSmall onClick={ onDelete }>
                        Delete
                        <XMarkIcon className="size-4 stroke-2" />
                    </Button>

                    <Button type="secondary" isSmall onClick={ onToggleEdit }>
                        { isEditing ? "Done" : "Edit" }
                        <PencilIcon className="size-4 stroke-2" />
                    </Button>

                    <Button isSmall onClick={ addItem }>
                        Add item
                        <PlusIcon className="size-4 stroke-2" />
                    </Button>
                </div>
            </div>

            {
                category.items.map((item, i) => (
                    <MenuItemRow
                        key={ i }
                        item={ item }
                        onChange={ item => changeItem(i, item) }
                        onDelete={ () => deleteItem(i) }
                    />
                ))
            }
        </section>
    )
}

export default MenuCategorySection