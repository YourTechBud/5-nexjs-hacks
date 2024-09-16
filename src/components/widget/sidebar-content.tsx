"use client"

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Home, List } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarContent(props: { isAdmin: boolean }) {
    const pathname = usePathname()
    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="/dashboard"
                        className={cn("flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                            pathname === "/dashboard" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        )}
                    >
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Dashboard</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            {
                props.isAdmin && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/jokes"
                                className={cn("flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8",
                                    pathname === "/jokes" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                                )}
                            >
                                <List className="h-5 w-5" />
                                <span className="sr-only">Jokes</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Jokes</TooltipContent>
                    </Tooltip>
                )
            }
        </>
    )
}