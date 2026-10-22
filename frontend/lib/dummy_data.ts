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

export type Reservation = {
    name: string
    surname: string
    phone: string
    email: string
    status: "Pending" | "Accepted" | "Cancelled" | "No-show"
    table: string
    numberOfPeople: number
    date: string
    time: string
}

export const reservations: Reservation[] = [
    {
        name: "Szopy",
        surname: "Szopix",
        phone: "123 123 123",
        email: "szop@szopix.szopers",
        status: "Pending",
        table: "Table 1",
        numberOfPeople: 3,
        date: "24 oct. 2026",
        time: "14:00"
    },
    {
        name: "Szopy",
        surname: "Szopix",
        phone: "123 123 123",
        email: "szop@szopix.szopers",
        status: "Pending",
        table: "Table 1",
        numberOfPeople: 3,
        date: "24 oct. 2026",
        time: "14:00"
    },
    {
        name: "Szopy",
        surname: "Szopix",
        phone: "123 123 123",
        email: "szop@szopix.szopers",
        status: "Pending",
        table: "Table 1",
        numberOfPeople: 3,
        date: "24 oct. 2026",
        time: "14:00"
    },
    {
        name: "Szopy",
        surname: "Szopix",
        phone: "123 123 123",
        email: "szop@szopix.szopers",
        status: "Pending",
        table: "Table 1",
        numberOfPeople: 3,
        date: "24 oct. 2026",
        time: "14:00"
    },
    {
        name: "Szopy",
        surname: "Szopix",
        phone: "123 123 123",
        email: "szop@szopix.szopers",
        status: "Pending",
        table: "Table 1",
        numberOfPeople: 3,
        date: "24 oct. 2026",
        time: "14:00"
    }
]