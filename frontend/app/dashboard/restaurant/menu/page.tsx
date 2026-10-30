"use client"

import { useState } from "react"
import { PlusIcon } from "@heroicons/react/24/outline"
import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"
import Button from "@/components/ui/button"
import { menu as dummyMenu, MenuCategory } from "@/lib/dummy_data"
import MenuCategorySection from "@/components/restaurant/menu-category-section"

const RestaurantMenuPage = () => {
    const [menu, setMenu] = useState<MenuCategory[]>(dummyMenu)
    const [editing, setEditing] = useState<number | null>(null)

    const changeCategory = (index: number, category: MenuCategory) => {
        setMenu(menu.map((c, i) => i === index ? category : c))
    }

    const deleteCategory = (index: number) => {
        setMenu(menu.filter((_, i) => i !== index))
    }

    const addCategory = () => {
        setMenu([...menu, { name: "", items: [] }])
        setEditing(menu.length)
    }

    return (
        <Card className="space-y-8">
            <Heading
                isH2
                title="Menu"
                desc="Guests see items with prices. Edit directly in the list."
                leftPanel={
                    <Button type="secondary" onClick={ addCategory }>
                        Add category
                        <PlusIcon className="size-5 stroke-2" />
                    </Button>
                }
            />

            {
                menu.map((category, i) => (
                    <MenuCategorySection
                        key={ i }
                        category={ category }
                        isEditing={ editing === i }
                        onChange={ category => changeCategory(i, category) }
                        onDelete={ () => deleteCategory(i) }
                        onToggleEdit={ () => setEditing(editing === i ? null : i) }
                    />
                ))
            }
        </Card>
    )
}

export default RestaurantMenuPage