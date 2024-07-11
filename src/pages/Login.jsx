import { account } from '@/Appwrite/AppwriteConfig';
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Field, Form, Formik } from 'formik';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const [loading, setLoading] = useState(false)
  const {toast} = useToast()

    const onSubmit = async (data) => {
      setLoading(true)
        try {
            const result = await account.createEmailPasswordSession(
                data?.email,
                data?.password
              );
              setLoading(false)
              toast({
                variant: "success",
                description: "Account created successfully.",
              });
              setTimeout(() => {
                navigate("/");
              }, 1000);
        } catch (error) {
          toast({
            variant: "destructive",
            description: "Something went wrong.",
          });
          setLoading(false);
          console.log(error);
        }
    }
  return (
   <div className='w-full h-screen flex justify-center items-center'>
     <Card className="w-full max-w-sm">
     <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
     <Form>

    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>
        Enter your email below to login to your account.
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Field as={Input}  id="email" name="email" type="email" placeholder={"Email"} required/>

        {/* <Input id="email" type="email" placeholder="m@example.com" required /> */}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Field as={Input}  id="password" name="password" type="password" placeholder={"Password"} required/>

        {/* <Input id="password" type="password" required /> */}
      </div>
    </CardContent>
    <div className="my-2 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to={"/signup"} className="underline">
            Sign up
          </Link>
        </div>
    <CardFooter>
      <Button  type="submit" disable={loading} className="w-full mt-2">
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Sign in</Button>
    </CardFooter>
    </Form>
    </Formik>
  </Card>
   </div>
  )
}

export default Login