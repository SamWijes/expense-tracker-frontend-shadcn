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

export function ExpenseList({ expenses,className = "" }) {


    return (
       <div className={`flex flex-col gap-3 border rounded-2xl p-4 ${className}`}>
            <h2 className="text-xl font-semibold mb-2">Expense List</h2>
            {expenses.map((expense,index) => (

                <Item key={index} variant="outline" className="w-11/12">
                    <ItemMedia variant="icon" className="-z-1">
                        <InboxIcon  />
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
            <PaginationExpense className="mt-auto "/>

        </div>
    )
}