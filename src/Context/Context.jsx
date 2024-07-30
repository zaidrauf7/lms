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
        navigate("/login")
    }
// GET LOGIN USER DETAIL

const [loader, setLoader] = useState(false)
const [userInfo, setUserInfo] = useState(null);
const fetchUserInfo = async () => {
    try {
        setLoader(true)
        const res = await account.get();
        setUserInfo(res);
        setLoader(false)
    }
    
    catch (err) {
      console.error('Error fetching user info:', err);
      // Handle error, e.g., redirect or show an error message
    }
  };
useEffect(() => {
    fetchUserInfo();
  }, []);
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
        userInfo,
        fetchUserInfo,
        loader,
    }
    return(
<Context.Provider value={contextValue}>
    {props.children}
</Context.Provider>
    )
}
export default ContextProvider;