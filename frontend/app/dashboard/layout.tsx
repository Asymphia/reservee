import { ReactNode } from "react"
import Sidebar from "@/components/layout/sidebar"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 min-w-0 p-12 pr-15">
                { children }
            </main>
        </div>
    )
}

export default DashboardLayout