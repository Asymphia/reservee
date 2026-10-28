"use client"

import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"
import Card from "@/components/ui/card"
import Heading from "@/components/ui/heading"

export type GuestsPoint = { label: string; current: number | null; previous: number | null }

const tick = { fill: "var(--text-300)", fontSize: 14 }

const GuestsChart = ({ data }: { data: GuestsPoint[] }) => (
    <Card className="flex flex-col gap-8 col-span-2">
        <Heading
            isH2
            title="Guests over time"
            desc="This week vs last week"
            leftPanel={
                <p className="flex gap-4 text-sm">
                    <span className="text-primary-500">● This period</span>
                    <span>● Previous period</span>
                </p>
            }
        />

        <div className="relative flex-1 min-h-70">
            <div className="absolute inset-0">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={ data } margin={{ left: -12, right: 8 }} accessibilityLayer={ false }>
                        <defs>
                            <linearGradient id="guests" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--primary-500)" stopOpacity={ 0.25 } />
                                <stop offset="100%" stopColor="var(--primary-500)" stopOpacity={ 0 } />
                            </linearGradient>
                        </defs>

                        <CartesianGrid vertical={ false } stroke="var(--text-500)" />

                        <XAxis
                            dataKey="label"
                            axisLine={ false }
                            tickLine={ false }
                            tick={ tick }
                            padding={{ left: 16, right: 16 }}
                        />

                        <YAxis
                            axisLine={ false }
                            tickLine={ false }
                            tick={ tick }
                        />

                        <Area dataKey="current" stroke="none" fill="url(#guests)" />

                        <Line
                            dataKey="previous"
                            stroke="var(--text-300)"
                            strokeWidth={ 2 }
                            strokeDasharray="5 5"
                            dot={ false }
                        />

                        <Line
                            dataKey="current"
                            stroke="var(--primary-500)"
                            strokeWidth={ 3 }
                            dot={{ r: 5, strokeWidth: 2, fill: "var(--background)" }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    </Card>
)

export default GuestsChart