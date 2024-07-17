import React, { useContext, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Field, Form, Formik } from "formik";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { COLLECTION_ID_STUDENTDATA, DATABASE_ID, databases, ID } from "@/Appwrite/AppwriteConfig";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Query } from "appwrite";
import { useParams } from "react-router-dom";
import { Context } from "@/Context/Context";

const EditStudentData = () => {
const {documentId} = useContext(Context)

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
console.log(documentId)
  const onSubmit = async (data, { resetForm }) => {
    setLoading(true);
    try {
      const promise = databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID_STUDENTDATA,
        documentId,
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
// ################

const {id} = useParams()  
const [editableData,setEditableData] = useState([])

const fetchData = async () =>{
  const promise = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID_STUDENTDATA,
    [
Query.equal("stdid",id)
    ]
  )
  setEditableData(promise.documents)
}

useEffect(() =>{
fetchData()
},[])

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
              {
                editableData.map((data) =>{
                  return(
                    <>
                    <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Field
                  as={Input}
                  id="firstname"
                  name="firstname"
                  // value={data.firstname}
                  type="text"
                  placeholder={data.firstname}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Field
                  as={Input}
                  id="lastname"
                  name="lastname"
                  // value={data.lastname}
                  type="text"
                  placeholder={data.lastname}
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
                  // value={data.dob}
                  type="date"
                  placeholder={data.dob}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Gender</Label>
                <Field
                  as={Input}
                  id="gender"
                  name="gender"
                  // value={data.gender}
                  type="text"
                  placeholder={data.gender}
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
                  // value={data.phonenumber}
                  type="text"
                  placeholder={data.phonenumber}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Home Address</Label>
                <Field
                  as={Input}
                  id="homeaddress"
                  name="homeaddress"
                  // value={data.phonenumber}
                  type="text"
                  placeholder={data.homeaddress}
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
                  // value={data.stdid}
                  type="text"
                  placeholder={data.stdid}
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
                  // value={data.guardianname}
                  type="text"
                  placeholder={data.guardianname}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Relationship to Student</Label>
                <Field
                  as={Input}
                  id="releation"
                  name="releation"
                  // value={data.releation}
                  type="text"
                  placeholder={data.releation}
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
                  // value={data.contactno}
                  type="text"
                  placeholder={data.contactno}
                  required
                />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
            </>
                  )
                })  
              }
            
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditStudentData;
