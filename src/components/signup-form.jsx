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
import { useState } from "react"
import axios from 'axios';

import { toast } from "sonner"


export function SignupForm({ className, ...props }) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()
 

  const [userName, setUser] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();

  async function onClickRegister() {

    if (!userName || !pass || !email) {
      console.log("enter data");
      return;

    }
    const regData = { username: userName, password: pass, email: email };
    try {
      await axios.post('/register', regData)
      navigate('/');
      toast("Succesfully Registered", {
        position: "bottom-center",
        style: {
          backgroundColor: "lightgrey",
          boxShadow: "0px 0px 20px 4px grey",
          fontSize: "0.9rem",
          display: "flex",
          justifyContent: "center"
        },
      })
    } catch (err) {
      // console.error(err.response);
      toast.warning(err.response.data, {
        position: "bottom-center",
        style: { backgroundColor: "lightgrey", boxShadow: "0px 0px 20px 4px grey", fontSize: "0.9rem", display: "flex", justifyContent: "center" },
      })
      // console.log(err.response.data)



    }
  }

  return (
    <div className="flex flex-col min-h-svh items-center justify-center">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Create your account</CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <Input onChange={(e) => setUser(e.target.value)} id="name" type="text" placeholder="John Doe" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="m@example.com" required />
                </Field>
                <Field>
                  <Field >
                    <Field>
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Input onChange={(e) => setPass(e.target.value)} id="password" type="password" required />
                    </Field>

                  </Field>
                  <FieldDescription>
                    Must be at least 8 characters long.
                  </FieldDescription>
                </Field>
                <Field>
                  <Button onClick={onClickRegister} type="button">Create Account</Button>
                  <FieldDescription className="text-center">
                    Already have an account? <Link to={"/"}>Sign in</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
        <FieldDescription className="px-6 text-center">
          By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
          and <a href="#">Privacy Policy</a>.
        </FieldDescription>
      </div>
    </div>
  );
}
