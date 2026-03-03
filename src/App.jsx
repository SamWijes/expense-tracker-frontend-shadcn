import { Button } from "@/components/ui/button"
import TokenProbe from "./pages/TokenTest/TokenProbe"
import { LoginForm } from "@/components/login-form"
import { Route, Routes } from "react-router-dom"
import { SignupForm } from '@/components/signup-form';
import { GradientGlassHeading } from '@/components/glass-heading';
import { ExpenseForm } from "@/components/expense-form";
import { Box } from "lucide-react";
import { ExpenseDash } from "./pages/ExpenseDash/ExpenseDash";
import  { SonnerDescription } from "./components/sonner";
import { Toaster } from "sonner"
import numbers from "./assets/numbers.jpg"
function App() {
  const head = document.head;

new MutationObserver(() => {
  const icon = document.querySelector("link[rel*='icon']");
  if (icon) console.log("FAVICON NOW:", icon.outerHTML);
}).observe(head, { childList: true, subtree: true, attributes: true });
  return (
    <>
    <section className="relative bg-cover -z-20 " style={{backgroundImage: `url(${numbers})`}} >
     
    <div className=" text-center sticky top-5 bottom-150 -z-10 pointer-events-none ">
      <GradientGlassHeading className="mb-6  ">Expense Tracker</GradientGlassHeading>
    </div>
    <div className="h-20">
    {/* ...content of this section... */}
  </div>
    </section>

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/home" element={<ExpenseDash />} />

      </Routes>
       <Toaster />
    </>
  )
}

export default App