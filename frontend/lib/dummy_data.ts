export type User = {
    name: string
    surname: string
    restaurant: string
}

export const user: User = {
    name: "Anna",
    surname: "Kowalska",
    restaurant: "Nobu Restaurant"
}

export type TableType = {
    name: string
    numberOfSits: number
    numberOfTables: number
    available: number
}

export const tables: TableType[] = [
    {
        name: "Table 1",
        numberOfSits: 2,
        numberOfTables: 4,
        available: 3
    },
    {
        name: "Table 2",
        numberOfSits: 2,
        numberOfTables: 4,
        available: 3
    },
    {
        name: "Table 3",
        numberOfSits: 2,
        numberOfTables: 4,
        available: 3
    },
    {
        name: "Table 4",
        numberOfSits: 2,
        numberOfTables: 4,
        available: 3
    },
]