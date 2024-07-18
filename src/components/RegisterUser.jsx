import SignUp from "@/pages/SignUp";
import React from "react";
import Information from "./Information";
import { Button } from "./ui/button";

const RegisterUser = () => {
  return (
    <div className="w-full rounded-md border-2 border-gray-100 shadow-xl p-4 h-[87vh] overflow-y-auto">
        <div>
        <h1 className="text-xl font-semibold my-8">Informaition</h1>
            
        </div>
        <Information/>
     
      {/* <SignUp /> */}
      {/* <div className="flex justify-end mt-4 mr-8"><Button>Done</Button></div> */}
    </div>
  );
};

export default RegisterUser;
