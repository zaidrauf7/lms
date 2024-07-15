import React from 'react'
import { Label } from "@/components/ui/label";
import { Field, Form, Formik } from 'formik';
import { Input } from './ui/input';


const Information = () => {
  return (
    <div className='w-[80%] mx-auto '>
        <div>
        <Formik
            initialValues={{ first_name: "",last_name: "" , email: "", password: "" }}
            //   onSubmit={onSubmit}
          >
            <Form>
        <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Field as={Input} id="first-name" name="first_name" type="text" placeholder={"First-Name"} required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Field as={Input} id="last-name" name="last_name" type="text" placeholder={"Last-Name"} required/>

                </div>

              </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Date of Birth</Label>
                  <Field as={Input} id="Dob" name="first_name" type="text" placeholder={"Date of Birth"} required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Gender</Label>
                  <Field as={Input} id="last-name" name="last_name" type="text" placeholder={"gender"} required/>

                </div>

              </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Phone Number</Label>
                  <Field as={Input} id="first-name" name="first_name" type="text" placeholder={"03123456789"} required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Home Address</Label>
                  <Field as={Input} id="last-name" name="last_name" type="text" placeholder={"45 Ghalib Road"} required/>

                </div>

              </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Student ID</Label>
                  <Field as={Input} id="first-name" name="first_name" type="text" placeholder={"12345-6789012-3"} required/>
                </div>
                {/* <div className="grid gap-2">
                  <Label htmlFor="last-name">Home Address</Label>
                  <Field as={Input} id="last-name" name="last_name" type="text" placeholder={"45 Ghalib Road"} required/>

                </div> */}

              </div>
              <div>
        <h1 className="text-xl font-semibold my-6">Parental/Guardian Details:</h1>
                
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Parent/Guardian Name</Label>
                  <Field as={Input} id="first-name" name="first_name" type="text" placeholder={"Guardian Name"} required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Relationship to Student</Label>
                  <Field as={Input} id="last-name" name="last_name" type="text" placeholder={"Father / Mother"} required/>

                </div>

              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Contact Number</Label>
                  <Field as={Input} id="first-name" name="first_name" type="text" placeholder={"03123456789"} required/>
                </div>
              

              </div>
              

              </Form>
              </Formik>
        </div>
    </div>
  )
}

export default Information