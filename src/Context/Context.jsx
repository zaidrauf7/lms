import { account, COLLECTION_ID_STUDENTDATA, DATABASE_ID, databases } from "@/Appwrite/AppwriteConfig";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext()


const ContextProvider = (props) =>{
    
    
    const { removeItem, getItem } = useLocalStorage();
    const user = getItem("cookieFallback");
    const navigate = useNavigate();
  
    const onLogout = async () => {
      await account.deleteSession("current");
      removeItem("user");
      navigate("/login");
    };

// GET STUDENT DATA
const [studentData,setStudentData] = useState([])

const fetchStudentData = async () =>{
const promise = await databases.listDocuments(
    DATABASE_ID,
    COLLECTION_ID_STUDENTDATA
)
setStudentData(promise.documents)
}

useEffect(() =>{
fetchStudentData()
},[])



    const contextValue = {
        onLogout,
        studentData
    }

    return(
<Context.Provider value={contextValue}>
    {props.children}
</Context.Provider>
    )
}

export default ContextProvider;