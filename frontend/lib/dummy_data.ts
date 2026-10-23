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

export type TableUsage = { name: string; seats: number; bookings: number }

export const tableUsage: TableUsage[] = [
    { name: "Table 4",  seats: 4, bookings: 48 },
    { name: "Table 7",  seats: 4, bookings: 44 },
    { name: "Table 2",  seats: 2, bookings: 41 },
    { name: "Table 9",  seats: 4, bookings: 11 },
    { name: "Table 12", seats: 2, bookings: 9 },
    { name: "Table 11", seats: 6, bookings: 6 },
]

export type WeekdayShare = { day: string; value: number }   // value w %

export const weekdayShare: WeekdayShare[] = [
    { day: "Mo", value: 9 },  { day: "Tu", value: 12 }, { day: "We", value: 11 },
    { day: "Th", value: 15 }, { day: "Fr", value: 22 }, { day: "Sa", value: 24 },
    { day: "Su", value: 7 },
]