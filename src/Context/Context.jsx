import { COLLECTION_ID_DATA, DATABASE_ID, databases } from "@/Appwrite/AppwriteConfig";
import { createContext, useEffect, useState } from "react";

export const Context = createContext()


const ContextProvider = (props) =>{

// ######## GET STUDENT ALL DATA ########

// GET DATA

const [studentData,setStudentData] = useState([])

const fetchData = async () =>{
const promise = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID_DATA
)
setStudentData(promise.documents)
}

useEffect(() =>{
fetchData()
},[])

// DELETE DATA
const handleDelete = async (student_id) => {
    await databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID_DATA,
      student_id
    );
    setStudentData((prevData) =>
      prevData.filter((student) => student.id !== student_id)
    );
  };


// ###################################                 SEND DATA                   #################################
    const contextValue = {
        studentData,
        handleDelete
    }

    return(
<Context.Provider value={contextValue}>
    {props.children}
</Context.Provider>
    )
}

export default ContextProvider;