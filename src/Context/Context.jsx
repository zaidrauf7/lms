import { account, COLLECTION_ID_STUDENTATTENDENCE, COLLECTION_ID_STUDENTDATA, DATABASE_ID, databases } from "@/Appwrite/AppwriteConfig";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext()


const ContextProvider = (props) =>{
    
    
    const navigate = useNavigate();
  
    const {removeItem} = useLocalStorage()
    const onLogout = () =>{
        account.deleteSession("current");
        removeItem("user");
        // navigate("/login") 
    }
    

//  STUDENT DATA

// GET DATA
const [studentData,setStudentData] = useState([])

const fetchStudentData = async () =>{
    const promise = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_STUDENTDATA
    )
    setStudentData(promise.documents)
}

const [studentAttendence,setStudentAttendence] = useState([])
const fetchstudentAttendence = async () =>{
    const promise = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_STUDENTATTENDENCE
    )
    setStudentAttendence(promise.documents)
}
useEffect(() =>{
    fetchStudentData(),
    fetchstudentAttendence()
},[])


console.log(studentAttendence);

const [present , setPresnet] = useState([])
// console.log(studentData)

// DELETE DATA
const studentDelete = async (student_id) => {
    await databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID_STUDENTDATA,
      student_id
    );
    setStudentData((prevStudent) =>
      prevStudent.filter((student) => student.id !== student_id)
    );
  };
  //  EDIT STUDENT DATA
  const [documentId,setDocumentId] = useState("")


    const contextValue = {
        onLogout,
        studentData,
        studentDelete,
        setDocumentId,
        documentId,
        studentAttendence,
        setPresnet,
        present,
    }

    return(
<Context.Provider value={contextValue}>
    {props.children}
</Context.Provider>
    )
}  

export default ContextProvider;