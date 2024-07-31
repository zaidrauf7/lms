import React, { useContext, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Field, Form, Formik } from "formik";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { COLLECTION_ID_STUDENTDATA, DATABASE_ID, databases } from "@/Appwrite/AppwriteConfig";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Query } from "appwrite";
import { useParams } from "react-router-dom";
import { Context } from "@/Context/Context";
const EditStudentData = () => {
  const { documentId } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [editableData, setEditableData] = useState(null);
  const { toast } = useToast();
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_STUDENTDATA,
        [Query.equal("stdid", id)]
      );
      setEditableData(response.documents[0]);
      setInitialLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Error fetching data.",
      });
      setInitialLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onSubmit = async (data, { resetForm }) => {
    setLoading(true);
    try {
      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID_STUDENTDATA,
        documentId,
        {
          firstname: data.firstname,
          lastname: data.lastname,
          dob: data.dob,
          gender: data.gender,
          phonenumber: data.phonenumber,
          homeaddress: data.homeaddress,
          stdid: data.stdid,
          guardianname: data.guardianname,
          releation: data.releation,
          contactno: data.contactno,
        }
      );
      setLoading(false);
      toast({
        variant: "success",
        description: "Account updated successfully.",
      });
      resetForm();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
      setLoading(false);
    }
  };
  if (initialLoading) {
    return <div>Loading...</div>; // Or any loading indicator component
  }
  return (
    <div className="w-[80%] mx-auto">
      <Formik
        initialValues={{
          firstname: editableData.firstname || "",
          lastname: editableData.lastname || "",
          dob: editableData.dob || "",
          gender: editableData.gender || "",
          phonenumber: editableData.phonenumber || "",
          homeaddress: editableData.homeaddress || "",
          stdid: editableData.stdid || "",
          guardianname: editableData.guardianname || "",
          releation: editableData.releation || "",
          contactno: editableData.contactno || "",
        }}
        onSubmit={onSubmit}
      >
        {({ setValues }) => {
          useEffect(() => {
            if (editableData) {
              setValues(editableData);
            }
          }, [editableData, setValues]);
          return (
            <Form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstname">First name</Label>
                  <Field
                    as={Input}
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastname">Last name</Label>
                  <Field
                    as={Input}
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Field
                    as={Input}
                    id="dob"
                    name="dob"
                    type="date"
                    placeholder="Date of Birth"
                    required
                  />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="last-name">Gender</Label>
                  <Field as="select" name="gender">
                    <option value="" label="Select a gender" />
                    <option value="male" label="male" />
                    <option value="female" label="female" />
                  </Field>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="phonenumber">Phone Number</Label>
                  <Field
                    as={Input}
                    id="phonenumber"
                    name="phonenumber"
                    type="text"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="homeaddress">Home Address</Label>
                  <Field
                    as={Input}
                    id="homeaddress"
                    name="homeaddress"
                    type="text"
                    placeholder="Home Address"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="stdid">Student ID</Label>
                  <Field
                    as={Input}
                    id="stdid"
                    name="stdid"
                    type="text"
                    placeholder="Student ID"
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
                  <Label htmlFor="guardianname">Parent/Guardian Name</Label>
                  <Field
                    as={Input}
                    id="guardianname"
                    name="guardianname"
                    type="text"
                    placeholder="Parent/Guardian Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="releation">Relationship to Student</Label>
                  <Field
                    as={Input}
                    id="releation"
                    name="releation"
                    type="text"
                    placeholder="Relationship to Student"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid gap-2">
                  <Label htmlFor="contactno">Contact Number</Label>
                  <Field
                    as={Input}
                    id="contactno"
                    name="contactno"
                    type="text"
                    placeholder="Contact Number"
                    required
                  />
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default EditStudentData;