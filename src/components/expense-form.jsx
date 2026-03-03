
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input"
import {Button} from './ui/button';
import { useState } from "react";
import axios from "axios";
import { DatePicker } from "./ui/date-range-picker";
import { format } from "date-fns";
export function ExpenseForm({setExpenses,expenses,setVisibleExpenses,className=""}) {
    const [title,setTitle]=useState();
    const [amount,setAmount]=useState();
    const [date,setDate]=useState();
    const [receiptFile,setReceiptFile]=useState(null);

    async function addExpense() {
        const payload={
            title:title,
            amount:amount,
            date: date ? format(date, "yyyy-MM-dd") : ""
        };
        const token=localStorage.getItem("token")
        try {
            console.log("clicked add exp");

            const formData = new FormData();
            formData.append("title", payload.title ?? "");
            formData.append("amount", payload.amount ?? "");
            formData.append("date", payload.date ?? "");
            if (receiptFile) {
                formData.append("file", receiptFile);
            }

            const addRes = await axios.post('/expense/add',formData,{
                headers:{Authorization:`Bearer ${token}`}
            })
            const createdExpense = addRes.data;
            setExpenses(prev=>[...prev,createdExpense])
            setVisibleExpenses([...expenses,createdExpense])
            
            
        } catch (error) {
            console.error(error);
            
        }
    }

    return (
        <div className={"border-2 rounded-2xl p-5    "+className}>
           <FieldGroup className={"gap-5 "}>
            <Field>
                <Input onChange={(e)=>setTitle(e.target.value)} placeholder="Expense Detail..."/>
            </Field>
            <Field>
                <Input onChange={(e)=>setAmount(e.target.value)} type={"number"} placeholder="amount"/>
            </Field>
            <DatePicker date={date} setDate={setDate} label={"Expense Date"} />
            <Field>
                <FieldLabel htmlFor="receipt-file">Receipt File</FieldLabel>
                <Input
                    id="receipt-file"
                    type="file"
                    onChange={(e)=>setReceiptFile(e.target.files?.[0] ?? null)}
                />
            </Field>
           </FieldGroup>
           <Button onClick={addExpense} className={"mt-3"}>Add Expense </Button>
        </div>

    )

}
