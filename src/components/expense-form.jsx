
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input"
import {Button} from './ui/button';
export function ExpenseForm({className=""}) {

    return (
        <div className={"border-2 rounded-2xl p-5    "+className}>
           <FieldGroup className={"gap-5 "}>
            <Field>
                <Input placeholder="Expense Detail..."/>
            </Field>
            <Field>
                <Input type={"number"} placeholder="amount"/>
            </Field>
            <Field>
                <Input placeholder="asdas"/>
            </Field>
           </FieldGroup>
           <Button className={"mt-3"}>Add Expense </Button>
        </div>

    )

}