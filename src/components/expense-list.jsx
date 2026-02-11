import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
    ItemActions
} from "@/components/ui/item"


import { InboxIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PaginationExpense } from "./pagination-expense"
import {  useState } from "react";
import { useEffect } from "react";


export function ExpenseList({ visibleExpenses, className = "" }) {
    const [actPage, setActPage] = useState(1);
    // const [render, setRender] = useState(1);
    // console.log("act page", "rend-" + render, actPage);
    // console.log("visiexp rend-" + render, visibleExpenses.length);
    
    useEffect(() => {
        // const pages = Math.max(1, Math.ceil(visibleExpenses.length / 5));
        const pages = Math.ceil(visibleExpenses.length / 5);
        // console.log(render);

        // setRender(prev => prev + 1)
        if (actPage > pages) {
            setActPage(pages)
        }
        else if(actPage<pages) setActPage(pages)


    }, [visibleExpenses.length])

    return (
        <div className={`flex flex-col gap-3 border rounded-2xl p-4 ${className}`}>
            <h2 className="text-xl font-semibold mb-2">Expense List</h2>
            {visibleExpenses.slice(5 * (actPage - 1), (actPage * 5)).map((expense, index) => (

                <Item key={index} variant="outline" className="w-11/12">
                    <ItemMedia variant="icon" className="-z-1">
                        <InboxIcon />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>{expense.title}</ItemTitle>
                        <div className="flex  items-center">
                            <ItemDescription >
                                {expense.amount}
                            </ItemDescription>
                            <ItemDescription className="m-auto">
                                Date: {expense.date}
                            </ItemDescription>
                        </div>
                    </ItemContent>
                    <ItemActions>
                        <Button size="sm" variant="outline">
                            Receipt
                        </Button>
                    </ItemActions>
                </Item>

            ))}
            <PaginationExpense setActPage={setActPage} actPage={actPage} expenseEntries={visibleExpenses.length} className="mt-auto " />

        </div>
    )
}