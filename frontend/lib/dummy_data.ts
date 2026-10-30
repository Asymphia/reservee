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

export type WeekdayShare = { day: string; value: number }

export const weekdayShare: WeekdayShare[] = [
    { day: "Mo", value: 9 },  { day: "Tu", value: 12 }, { day: "We", value: 11 },
    { day: "Th", value: 15 }, { day: "Fr", value: 22 }, { day: "Sa", value: 24 },
    { day: "Su", value: 7 },
]

export type Share = { label: string; value: number; color?: string }

export const statusShare: Share[] = [
    { label: "Accepted", value: 72 },
    { label: "Pending",  value: 12 },
    { label: "Canceled", value: 13 },
    { label: "No-show",  value: 3 },
]

export const partySize: Share[] = [
    { label: "1 guest", value: 5 },
    { label: "2 guests", value: 29 },
    { label: "3–4 guests", value: 46 },
    { label: "5–6 guests", value: 14 },
    { label: "7-8 guests",  value: 4 },
    { label: "9+ guests",  value: 2 },
]

export type CustomerMapData = {
    days: string[]
    hours: number[]
    values: number[][]
}

const dayWeight  = [0.55, 0.7, 0.65, 0.8, 1.15, 1.4, 0.9]
const hourWeight = [0.35, 0.5, 0.4, 0.2, 0.18, 0.45, 0.8, 1, 0.9, 0.5]

export const customerMap: CustomerMapData = {
    days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    hours: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    values: hourWeight.map(h => dayWeight.map(d => Math.round(26 * d * h))),
}

export type MenuItem = {
    name: string
    description: string
    price: string
}

export type MenuCategory = {
    name: string
    items: MenuItem[]
}

export const menu: MenuCategory[] = [
    {
        name: "Starters",
        items: [
            { name: "Edamame", description: "Sea salt, lime", price: "16" },
            { name: "Yellowtail jalapeño", description: "Yuzu, ponzu", price: "48" },
        ],
    },
    {
        name: "Main courses",
        items: [
            { name: "Black cod miso", description: "Sweet miso, pickled ginger", price: "92" },
            { name: "Salmon teriyaki", description: "Rice, seasonal greens", price: "68" },
        ],
    },
]