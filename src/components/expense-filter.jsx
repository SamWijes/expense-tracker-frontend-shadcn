
import { useState } from 'react'
import { Button } from './ui/button'
import { DatePicker } from './ui/date-range-picker'
import axios from 'axios'
import { toast } from "sonner"
export function ExpenseFilter({setExpenses, className }) {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    async function filterExpenses() {
        try {   
            if (!startDate ) {
                toast("Pick a Start Date", { position: 'bottom-center' })
                return
            }else if(!endDate) return toast("Pick a End Date", { position: 'bottom-center' })

            const start = new Date(startDate).toISOString().slice(0, 10);
            const end =  new Date(endDate).toISOString().slice(0, 10);
            const qFilter=await axios.post('/expense/filter', { start: start, end: end },
                { headers: {
                     Authorization: `Bearer ${localStorage.getItem('token')}` 
                    }
                 })
            setExpenses(qFilter.data)

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className={`border-2 rounded-2xl p-5 w-full flex-col flex  gap-2 ${className}`}>
            <DatePicker date={startDate} setDate={setStartDate} label={"Start Date"} />
            <DatePicker date={endDate} setDate={setEndDate} label={"End Date"} />
            <Button onClick={filterExpenses} className={"mt-4 w-20"}>Search</Button>
        </div>
    )

}