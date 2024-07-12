import { account } from "@/Appwrite/AppwriteConfig";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext } from "react";
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
    const contextValue = {

        onLogout
    }

    return(
<Context.Provider value={contextValue}>
    {props.children}
</Context.Provider>
    )
}

export default ContextProvider;