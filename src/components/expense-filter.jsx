
import { Button } from './ui/button'
import { DatePicker } from './ui/date-range-picker'
export function ExpenseFilter({ className }) {


    return (
        <div className={`border-2 rounded-2xl p-5 w-full flex-col flex  gap-2 ${className}`}>
            <DatePicker label={"Start Date"} />
            <DatePicker label={"End Date"} />
            <Button className={"mt-4 w-20"}>Search</Button>
        </div>
    )

}