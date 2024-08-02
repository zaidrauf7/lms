import {
  COLLECTION_ID_STUDENTATTENDENCE,
  DATABASE_ID,
  databases,
} from "@/Appwrite/AppwriteConfig";
import React, { useEffect, useState } from "react";

const Attendence = () => {
  const [getData, setGetData] = useState([])
  const attendence = async () => {
    const result = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_STUDENTATTENDENCE,

    );
    setGetData(result.documents)
  };
  useEffect(()=>{
    attendence()
  },[])
  console.log(getData);
  return <div>
    {getData.map((val) =>{
      return(
       <div className="flex justify-between gap-10">
         <h1>{val.name}</h1>
         <h1>{val.date.slice(0 , 10)}</h1>
         <h1>{val.intime}</h1>
         <h1>{val.outtime}</h1>
         <h1>{val.duration}</h1>
       </div>
      )
    })}
  </div>;
};

export default Attendence;
