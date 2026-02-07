import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import  { useState } from "react"
import axios from "axios";



axios.defaults.baseURL = "http://localhost:3000"



export function LoginForm({
  className,
  ...props
}) {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const navigation=useNavigate()


  function setToken(token,user) {
    localStorage.setItem("token", token)
    localStorage.setItem("user", user)

  }


  async function onClickLogin() {
    const body = {
      email: user,
      password: pass
    }
    try {
      const loginRes = await axios.post("/login", body)
      // console.log(loginRes);
      setToken(loginRes.data.token,loginRes.data.user.email)
      
      navigation('/home')
      
    } catch (error) {
      console.log(error.response);

    }




  }



  return (
    <div className="flex flex-col min-h-svh items-center justify-center">
      <div className={cn("flex flex-col gap-6 w-full max-w-sm", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input onChange={(e) => setUser(e.target.value)} id="email" type="email" placeholder="m@example.com" required />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <Input onChange={(e) => setPass(e.target.value)} id="password" type="password" required />
                </Field>
                <Field>
                  <Button type="button" onClick={onClickLogin}>Login</Button>

                  <FieldDescription className="text-center">
                    Don&apos;t have an account? <Link to={"/register"}>Sign up</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
