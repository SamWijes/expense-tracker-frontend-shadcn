
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input"
import {Button} from './ui/button';
import { useState } from "react";
import axios from "axios";
export function ExpenseForm({setExpenses,expenses,setVisibleExpenses,className=""}) {
    const [title,setTitle]=useState();
    const [amount,setAmount]=useState();

    async function addExpense() {
        const payload={title:title,amount:amount};
        const token=localStorage.getItem("token")
        try {
            console.log("clicked add exp");
            
            await axios.post('/expense/add',payload,{headers:{Authorization:`Bearer ${token}`}})
            setExpenses(prev=>[...prev,payload])
            setVisibleExpenses([...expenses,payload])
            
            
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
            <Field>
                <Input placeholder="asdas"/>
            </Field>
           </FieldGroup>
           <Button onClick={addExpense} className={"mt-3"}>Add Expense </Button>
        </div>

    )

}