"use client"

import { Area, AreaChart, Bar, BarChart, Rectangle, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

export default function DashboardContent(props: { pranks: number, victims: number }) {
    return (
        <>
            <Card
                className="w-full" x-chunk="charts-01-chunk-6"
            >
                <CardHeader className="p-4 pb-0">
                    <CardTitle>Pranks Played</CardTitle>
                    <CardDescription>
                        How many stupid pranks did you play today?
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
                    <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                        {props.pranks}
                        <span className="text-sm font-normal text-muted-foreground">
                            Prank
                        </span>
                    </div>
                    <ChartContainer
                        config={{
                            calories: {
                                label: "Calories",
                                color: "hsl(var(--chart-1))",
                            },
                        }}
                        className="ml-auto w-[64px]"
                    >
                        <BarChart
                            accessibilityLayer
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            data={[
                                {
                                    date: "2024-01-01",
                                    calories: 354,
                                },
                                {
                                    date: "2024-01-02",
                                    calories: 514,
                                },
                                {
                                    date: "2024-01-03",
                                    calories: 345,
                                },
                                {
                                    date: "2024-01-04",
                                    calories: 734,
                                },
                                {
                                    date: "2024-01-05",
                                    calories: 645,
                                },
                                {
                                    date: "2024-01-06",
                                    calories: 456,
                                },
                                {
                                    date: "2024-01-07",
                                    calories: 345,
                                },
                            ]}
                        >
                            <Bar
                                dataKey="calories"
                                fill="var(--color-calories)"
                                radius={2}
                                fillOpacity={0.2}
                                activeIndex={6}
                                activeBar={<Rectangle fillOpacity={0.8} />}
                            />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={4}
                                hide
                            />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card
                className="w-full" x-chunk="charts-01-chunk-6"
            >
                <CardHeader className="p-4 pb-0">
                    <CardTitle>Victims</CardTitle>
                    <CardDescription>
                        How many friends did you loose to your stupid pranks today?
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
                    <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                        {props.victims}
                        <span className="text-sm font-normal text-muted-foreground">
                            Friend(s) lost
                        </span>
                    </div>
                    <ChartContainer
                        config={{
                            calories: {
                                label: "Calories",
                                color: "hsl(var(--chart-1))",
                            },
                        }}
                        className="ml-auto w-[64px]"
                    >
                        <BarChart
                            accessibilityLayer
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            data={[
                                {
                                    date: "2024-01-01",
                                    calories: 354,
                                },
                                {
                                    date: "2024-01-02",
                                    calories: 514,
                                },
                                {
                                    date: "2024-01-03",
                                    calories: 345,
                                },
                                {
                                    date: "2024-01-04",
                                    calories: 734,
                                },
                                {
                                    date: "2024-01-05",
                                    calories: 645,
                                },
                                {
                                    date: "2024-01-06",
                                    calories: 456,
                                },
                                {
                                    date: "2024-01-07",
                                    calories: 345,
                                },
                            ]}
                        >
                            <Bar
                                dataKey="calories"
                                fill="var(--color-calories)"
                                radius={2}
                                fillOpacity={0.2}
                                activeIndex={6}
                                activeBar={<Rectangle fillOpacity={0.8} />}
                            />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={4}
                                hide
                            />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card
                className="w-full" x-chunk="charts-01-chunk-6"
            >
                <CardHeader className="p-4 pb-0">
                    <CardTitle>Reputation Lost</CardTitle>
                    <CardDescription>
                        Be honest, your pranks are not helping you get some street creds now, is it?
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
                    <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                        NaN
                        <span className="text-sm font-normal text-muted-foreground">
                            Street Creds
                        </span>
                    </div>
                    <ChartContainer
                        config={{
                            calories: {
                                label: "Calories",
                                color: "hsl(var(--chart-1))",
                            },
                        }}
                        className="ml-auto w-[64px]"
                    >
                        <BarChart
                            accessibilityLayer
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            data={[
                                {
                                    date: "2024-01-01",
                                    calories: 354,
                                },
                                {
                                    date: "2024-01-02",
                                    calories: 514,
                                },
                                {
                                    date: "2024-01-03",
                                    calories: 345,
                                },
                                {
                                    date: "2024-01-04",
                                    calories: 734,
                                },
                                {
                                    date: "2024-01-05",
                                    calories: 645,
                                },
                                {
                                    date: "2024-01-06",
                                    calories: 456,
                                },
                                {
                                    date: "2024-01-07",
                                    calories: 345,
                                },
                            ]}
                        >
                            <Bar
                                dataKey="calories"
                                fill="var(--color-calories)"
                                radius={2}
                                fillOpacity={0.2}
                                activeIndex={6}
                                activeBar={<Rectangle fillOpacity={0.8} />}
                            />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={4}
                                hide
                            />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card
                className="w-full" x-chunk="charts-01-chunk-7"
            >
                <CardHeader className="space-y-0 pb-0">
                    <CardDescription>Laughs Earned</CardDescription>
                    <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                        10
                        <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                            laughs
                        </span>
                        35
                        <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                            giggles
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ChartContainer
                        config={{
                            time: {
                                label: "Time",
                                color: "hsl(var(--chart-2))",
                            },
                        }}
                    >
                        <AreaChart
                            accessibilityLayer
                            data={[
                                {
                                    date: "2024-01-01",
                                    time: 8.5,
                                },
                                {
                                    date: "2024-01-02",
                                    time: 7.2,
                                },
                                {
                                    date: "2024-01-03",
                                    time: 8.1,
                                },
                                {
                                    date: "2024-01-04",
                                    time: 6.2,
                                },
                                {
                                    date: "2024-01-05",
                                    time: 5.2,
                                },
                                {
                                    date: "2024-01-06",
                                    time: 8.1,
                                },
                                {
                                    date: "2024-01-07",
                                    time: 10.0,
                                },
                            ]}
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="date" hide />
                            <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                            <defs>
                                <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-time)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-time)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="time"
                                type="natural"
                                fill="url(#fillTime)"
                                fillOpacity={0.4}
                                stroke="var(--color-time)"
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                                formatter={(value) => (
                                    <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                                        Laughs Earned
                                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                                            {value}
                                        </div>
                                    </div>
                                )}
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card
                className="w-full" x-chunk="charts-01-chunk-7"
            >
                <CardHeader className="space-y-0 pb-0">
                    <CardDescription>Career Growth</CardDescription>
                    <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                        -12
                        <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                            %
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ChartContainer
                        config={{
                            time: {
                                label: "Time",
                                color: "hsl(var(--chart-1))",
                            },
                            error: {
                                label: "Error",
                                color: "hsl(var(--chart-1))",
                            },
                        }}
                    >
                        <AreaChart
                            accessibilityLayer
                            data={[
                                {
                                    date: "2024-01-01",
                                    time: 8.5,
                                },
                                {
                                    date: "2024-01-02",
                                    time: 7.2,
                                },
                                {
                                    date: "2024-01-03",
                                    time: 7.7,
                                },
                                {
                                    date: "2024-01-04",
                                    time: 6.2,
                                },
                                {
                                    date: "2024-01-05",
                                    time: 5.2,
                                },
                                {
                                    date: "2024-01-06",
                                    time: 7,
                                },
                                {
                                    date: "2024-01-07",
                                    time: 5,
                                },
                            ]}
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="date" hide />
                            <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                            <defs>
                                <linearGradient id="fillError" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-time)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-time)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="time"
                                type="natural"
                                fill="url(#fillError)"
                                fillOpacity={0.4}
                                stroke="var(--color-time)"
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                                formatter={(value) => (
                                    <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                                        Career Growth
                                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                                            {value}
                                        </div>
                                    </div>
                                )}
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card
                className="w-full" x-chunk="charts-01-chunk-7"
            >
                <CardHeader className="space-y-0 pb-0">
                    <CardDescription>Willingness To Live</CardDescription>
                    <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                        -15
                        <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                            %
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ChartContainer
                        config={{
                            time: {
                                label: "Time",
                                color: "hsl(var(--chart-1))",
                            },
                        }}
                    >
                        <AreaChart
                            accessibilityLayer
                            data={[
                                {
                                    date: "2024-01-01",
                                    time: 8.4,
                                },
                                {
                                    date: "2024-01-02",
                                    time: 7.2,
                                },
                                {
                                    date: "2024-01-03",
                                    time: 6.8,
                                },
                                {
                                    date: "2024-01-04",
                                    time: 7.2,
                                },
                                {
                                    date: "2024-01-05",
                                    time: 5.3,
                                },
                                {
                                    date: "2024-01-06",
                                    time: 6.9,
                                },
                                {
                                    date: "2024-01-07",
                                    time: 5,
                                },
                            ]}
                            margin={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="date" hide />
                            <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                            <defs>
                                <linearGradient id="fillError" x1="0" y1="0" x2="0" y2="1" >
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-time)"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-time)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="time"
                                type="natural"
                                fill="url(#fillError)"
                                fillOpacity={0.4}
                                stroke="var(--color-time)"
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                                formatter={(value) => (
                                    <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                                        Time in bed
                                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                                            {value}
                                            <span className="font-normal text-muted-foreground">
                                                hr
                                            </span>
                                        </div>
                                    </div>
                                )}
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </>
    )

}