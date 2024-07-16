import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Field, Form, Formik } from "formik";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { COLLECTION_ID_STUDENTDATA, DATABASE_ID, databases, ID } from "@/Appwrite/AppwriteConfig";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const Information = () => {

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data, { resetForm }) => {
    setLoading(true);
    try {
      const promise = databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID_STUDENTDATA,
        ID.unique(),
        {
          'firstname': data?.firstname,
          'lastname': data?.lastname,
          'dob': data?.dob,
          'gender': data?.gender,
          'phonenumber': data?.phonenumber,
          'homeaddress': data?.homeaddress,
          'stdid': data?.stdid,
          'guardianname': data?.guardianname,
          'releation': data?.releation,
          'contactno': data?.contactno
        }
      );
      console.log(data.firstname)
      setLoading(false);
      toast({
        variant: "success",
        description: "Account created successfully.",
      });
      resetForm(); // Reset the form fields after successful submission
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="w-[80%] mx-auto ">
      <div>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            dob: "",
            gender: "",
            phonenumber: "",
            homeaddress: "",
            stdid: "",
            guardianname: "",
            releation: "",
            contactno: ""
          }}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Field
                  as={Input}
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder={"First-Name"}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Field
                  as={Input}
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder={"Last-Name"}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Date of Birth</Label>
                <Field
                  as={Input}
                  id="dob"
                  name="dob"
                  type="date"
                  placeholder={"Date of Birth"}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Gender</Label>
                <Field
                  as={Input}
                  id="gender"
                  name="gender"
                  type="text"
                  placeholder={"Gender"}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Phone Number</Label>
                <Field
                  as={Input}
                  id="phonenumber"
                  name="phonenumber"
                  type="text"
                  placeholder={"03123456789"}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Home Address</Label>
                <Field
                  as={Input}
                  id="homeaddress"
                  name="homeaddress"
                  type="text"
                  placeholder={"45 Ghalib Road"}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Student ID</Label>
                <Field
                  as={Input}
                  id="stdid"
                  name="stdid"
                  type="text"
                  placeholder={"12345-6789012-3"}
                  required
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold my-6">
                Parental/Guardian Details:
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Parent/Guardian Name</Label>
                <Field
                  as={Input}
                  id="guardianname"
                  name="guardianname"
                  type="text"
                  placeholder={"Guardian Name"}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Relationship to Student</Label>
                <Field
                  as={Input}
                  id="releation"
                  name="releation"
                  type="text"
                  placeholder={"Father / Mother"}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Contact Number</Label>
                <Field
                  as={Input}
                  id="contactno"
                  name="contactno"
                  type="text"
                  placeholder={"03123456789"}
                  required
                />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Information;
