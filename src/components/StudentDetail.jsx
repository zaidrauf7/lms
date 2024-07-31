import {
  COLLECTION_ID_STUDENTDATA,
  DATABASE_ID,
  databases,
} from "@/Appwrite/AppwriteConfig";
import { Query } from "appwrite";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const StudentDetail = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);
console.log(singleData);
  const stdDetails = async () => {
    try {
      const result = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_STUDENTDATA,
        [Query.equal("stdid", id)]
      );
      setSingleData(result.documents[0]);
    } catch (error) {
      console.error("Failed to fetch student details:", error);
    }
  };

  useEffect(() => {
    stdDetails();
  }, [id]);

  if (!singleData) {
    return <div className="w-full h-[86vh] flex justify-center items-center"> <Loader2 className="mr-2 h-8 w-8 animate-spin" /></div>;
  }

  const age = calculateAge(singleData.dob);

  return (
    <div className="w-full ">
      <div className="w-[70%] mx-auto h-[87vh] bg-white rounded-2xl p-4 shadow-md">
     <div className="md:w-[60%] w-full mx-auto flex justify-center h-full flex-col gap-y-4">
     <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Full Name : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.firstname} {singleData.lastname}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">DOB : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.dob}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">AGE : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {age} Years</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Gender : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.gender}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Student Mobile : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.phonenumber}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Email : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.email}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Address : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.homeaddress}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Guardian Name : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.guardianname}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Guardian Number : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.contactno}</h1>
      </div>
      <div className="flex justify-between items-center">
        <label className="lg:text-2xl text-lg font-semibold">Guardian Relation : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.releation}</h1>
      </div>
      <div className="flex justify-between  items-center">
        <label className="lg:text-2xl text-lg font-semibold">Batch : </label>
        <h1 className="lg:text-2xl text-lg font-normal"> {singleData.batch}</h1>
      </div>


     </div>

      
      </div>
    </div>
  );
};

export default StudentDetail;
