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
    const [selectedReceipt, setSelectedReceipt] = useState(null);
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

    function toDateOnly(value) {
        if (!value) return "";
        return String(value).slice(0, 10);
    }

    function getReceiptUrl(receiptPath) {
        if (!receiptPath) return "";
        if (receiptPath.startsWith("http")) return receiptPath;
        const apiBase = import.meta.env.VITE_API_URL ?? "";
        const normalizedPath = receiptPath.replace(/\\/g, "/").replace(/^\/+/, "");
        return apiBase ? `${apiBase.replace(/\/+$/, "")}/${normalizedPath}` : `/${normalizedPath}`;
    }

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
                                Date: {toDateOnly(expense.expense_date ?? expense.date)}
                            </ItemDescription>
                        </div>
                    </ItemContent>
                    {expense.receipt && (
                        <ItemActions>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedReceipt(getReceiptUrl(expense.receipt))}
                            >
                                Receipt
                            </Button>
                        </ItemActions>
                    )}
                </Item>

            ))}
            <PaginationExpense setActPage={setActPage} actPage={actPage} expenseEntries={visibleExpenses.length} className="mt-auto " />

            {selectedReceipt && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                    onClick={() => setSelectedReceipt(null)}
                >
                    <div
                        className="relative max-w-3xl w-[90%] rounded-lg bg-white p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Button
                            size="sm"
                            variant="outline"
                            className="absolute right-3 top-3"
                            onClick={() => setSelectedReceipt(null)}
                        >
                            Close
                        </Button>
                        <img
                            src={selectedReceipt}
                            alt="Receipt"
                            className="mx-auto max-h-[80vh] w-auto rounded-md object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
