'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import React from "react";
import { addJoke } from "./jokes-actions";
import { useRouter } from "next/navigation";

export default function JokesContent(props: { jokes: { content: string }[] }) {
    const { jokes } = props;

    const router = useRouter();
    const [joke, setJoke] = React.useState("")
    const add = async () => {
        await addJoke(joke)
        // router.refresh()
        setJoke("")
    }

    return (
        <>
            <div className="flex items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    Joke:
                </Label>
                <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-2"
                    onChange={(e) => setJoke(e.target.value)}
                    value={joke}
                />
                <Button onClick={add}>Add</Button>
            </div>
            <br />
            <Table className="w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead>Joke</TableHead>
                        <TableHead>Actiions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jokes.map((joke, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{joke.content}</TableCell>
                            <TableCell className="align-right"><Trash className="size-4 text-red-500 cursor-pointer" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}