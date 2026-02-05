import { ExpenseFilter } from "../../components/expense-filter";
import { ExpenseForm } from "../../components/expense-form";
import { ExpenseList } from "../../components/expense-list";

export function ExpenseDash() {
    let expenses = [{ title: "lunch", amount: 2500, date: "10-10-2024" }]

    return (
        <div className="mt-10 grid grid-cols-3 grid-rows-2 gap-5 p-20 w-11/12 max-w-7xl min-w-2xl mx-auto ">
            <ExpenseForm className="col-start-1 w-max-150 w-full max-w-sm row-start-1 justify-self-end overflow-hidden" />

            <ExpenseList
                className=" col-start-2 col-end-4 row-start-1 row-span-2 w-full  h-full"
                expenses={expenses}
            />

            <ExpenseFilter className=" max-w-sm col-start-1 row-start-2 justify-self-end overflow-hidden" />
        </div>
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