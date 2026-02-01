import { Button } from "@/components/ui/button"
import TokenProbe from "./pages/TokenTest/TokenProbe"
 
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <TokenProbe/>
    </div>
  )
}
 
export default App