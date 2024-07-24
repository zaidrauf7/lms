import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Context } from "@/Context/Context";
const Attendence = () => {
  const {studentData} = useContext(Context)
  return (
    <div className="bg-[#e3e8ec] w-full h-screen">
      <h1 className="text-lg mx-2 pt-2 font-semibold">Attendence</h1>
      <div className="topBar mx-2 flex gap-6 pt-3">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Button>Take Attendence</Button>
      </div>
      <div className="card-holder mx-2 flex gap-3 flex-wrap">
{
  studentData.map((val) =>{
    return(
      <div className="card w-[200px] bg-white h-[200px] rounded-lg flex flex-col justify-center mt-4 items-center">
          <img src="data:image/jpeg;base64,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" alt="" className="w-[70px]  h-[70px] rounded-[120px]" />
          <h3 className="pb-4">{val.firstname + val.lastname}</h3>
          <div className="attendence-circle-holder flex gap-3">
            <button className="present w-[40px] h-[40px] bg-red-400 flex justify-center items-center rounded-3xl">A</button>
            <button className="present w-[40px] h-[40px] bg-green-400 flex justify-center items-center rounded-3xl">P</button>
            <button className="present w-[40px] h-[40px] bg-yellow-400 flex justify-center items-center rounded-3xl">L</button>
          </div>
        </div>
    )
  })
}
        
      </div>
    </div>
  );
};

export default Attendence;
