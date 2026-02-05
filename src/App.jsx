import { Button } from "@/components/ui/button"
import TokenProbe from "./pages/TokenTest/TokenProbe"
import { LoginForm } from "@/components/login-form"
import { Route, Routes } from "react-router-dom"
import { SignupForm } from '@/components/signup-form';
import { GradientGlassHeading } from '@/components/glass-heading';
import { ExpenseForm } from "@/components/expense-form";
import { Box } from "lucide-react";
import { ExpenseDash } from "./pages/ExpenseDash/ExpenseDash";
function App() {
  return (
    <>
    <div className="text-center sticky top-5">
      <GradientGlassHeading className="mb-6 ">Expense Tracker</GradientGlassHeading>
    </div>


      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/auth" element={<ExpenseDash />} />
      </Routes>
    </>
  )
}

export default App