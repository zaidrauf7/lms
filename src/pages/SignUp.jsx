import React, { useState } from "react";
// import Link from "next/link"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useToast } from "@/components/ui/use-toast";
import { ID, account } from "@/Appwrite/AppwriteConfig";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const result = await account.create(
        ID.unique(),
        data?.email,
        data?.password,
        data?.name
      );
      setLoading(false);
      toast({
        variant: "success",
        description: "Account created successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
      setLoading(false);

    }
  };
  return (
    <div className=" flex justify-center items-center">
      <Card className="mx-auto w-[80%] p-10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{ first_name: "",last_name: "" , email: "", password: "" }}
              onSubmit={onSubmit}
          >
            <Form>
                
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Field as={Input} id="first-name" name="first_name" type="text" placeholder={"First-Name"} required/>
                  {/* <Input  placeholder="Max" required /> */}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Field as={Input} id="last-name" name="last_name" type="text" placeholder={"Last-Name"} required/>

                  {/* <Input  placeholder="Robinson" required /> */}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                {/* <Input
                 
                  
                  placeholder="m@example.com"
                  required
                /> */}
                  <Field as={Input}  id="email" name="email" type="email" placeholder={"Email"} required/>

              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                {/* <Input  type="password" /> */}
                <Field as={Input}  id="password" name="password" type="password" placeholder={"Password"} required/>

              </div>
              <Button type="submit"  disable={loading}  className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create an account
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="#" className="underline">
                Sign in
              </Link>
            </div>
            </Form>

          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
