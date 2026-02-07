import { useNavigate } from "react-router-dom";
import { ExpenseFilter } from "../../components/expense-filter";
import { ExpenseForm } from "../../components/expense-form";
import { ExpenseList } from "../../components/expense-list";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function ExpenseDash() {
    const [expenses, setExpenses] = useState([{ title: "lunch", amount: 2500, date: "10-10-2024" }])
    const [visibleExpenses, setVisibleExpenses] = useState([]);
    console.log("render ExpenseDash");

    const navigate = useNavigate();
    const username = localStorage.getItem("user");
    function removeToken() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate('/');
    }
    async function loadExpenses() {
        try {
            const expResult = await axios.get('/expense/load', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log("here", expResult);

            setExpenses(expResult.data)
            setVisibleExpenses(expResult.data)
        } catch (error) {
            console.log(error);

        }
    }
    


    useEffect(() => {

        loadExpenses()

    }, [])
    return (
        <>

            <div className="mt-10 p-20 w-11/12 max-w-7xl min-w-2xl mx-auto  ">
                <div className="flex justify-between ">
                    <Button type="button" onClick={removeToken} className="mb-5 text-lg cursor-pointer   ">Log Out</Button>
                    <h5 className="relative -z-1 border bg-linear-to-b from-gray-300/40 to-white/80 backdrop-blur-md h-10
         rounded-lg px-3 pt-1.5 ">logged in as {username}</h5>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-5 ">

                    <ExpenseForm setExpenses={setExpenses} allexpenses={expenses} setVisibleExpenses={setVisibleExpenses} className="col-start-1 w-max-150 w-full max-w-sm row-start-1 justify-self-end overflow-hidden" />

                    <ExpenseList
                        className=" col-start-2 col-end-4 row-start-1 row-span-2 w-full  h-full"
                        visibleExpenses={visibleExpenses}

                    />

                    <ExpenseFilter expenses={expenses} setExpenses={setVisibleExpenses} className=" max-w-sm col-start-1 row-start-2 justify-self-end overflow-hidden" />
                </div>
            </div>
        </>
        //         <div className="mt-10 px-2">
        //   <div className="grid grid-cols-3 grid-rows-2 gap-5 p-20 max-w-6xl mx-auto">
        //     <ExpenseForm className="col-start-1 row-start-1 justify-self-end max-w-sm w-full" />
        //     <ExpenseList className="col-start-2 col-end-4 row-start-1 row-span-2 w-full h-full" expenses={expenses} />
        //     <ExpenseFilter className="col-start-1 row-start-2 justify-self-end max-w-sm w-full" />
        //   </div>
        // </div>

        // <div className="grid grid-cols-2 grid-rows-2  min-h-fit ">
        //     <div className="m-auto text-4xl h-50 w-50 bg-amber-300" ></div>
        //     <div className="m-auto text-4xl h-100 w-100 bg-blue-300 row-span-2" ></div>
        //     <div className="m-auto text-4xl h-50 w-50 bg-red-300" ></div>
        // </div>
    )
}