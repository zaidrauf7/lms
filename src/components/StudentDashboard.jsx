import React, { useContext } from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Context } from "@/Context/Context";
  const invoices = [
    {
      date: "Jul 22,2024",
      in: "10:50 AM",
      out: "3:10 PM",
      duration: "9:00",
    },
    {
      date: "Jul 22,2024",
      in: "10:50 AM",
      out: "3:10 PM",
      duration: "9:00",
    },
    {
      date: "Jul 22,2024",
      in: "10:50 AM",
      out: "3:10 PM",
      duration: "9:00",
    },
    {
      date: "Jul 22,2024",
      in: "10:50 AM",
      out: "3:10 PM",
      duration: "9:00",
    },
    
  ]

const studentDashboard = () => {
  const  {checkIn,userInfo,change,setChange} = useContext(Context)
  return (
    <div className="w-full h-[87vh] bg-[#eeeeee] rounded-md shadow-md p-6 ">
     <div className="flex justify-between">
     <div className="w-[340px] h-[200px] bg-white rounded-xl border-t-4 border-blue-500 shadow-md p-4">
        <div className="flex justify-around items-center ">
            <div className="bg-blue-100 flex justify-center  items-center p-4 rounded-full">

          <IoCalendarNumberOutline className="text-3xl "/>
            </div>
    {change ?  <Button className="bg-blue-500 rounded-full" onClick={() => checkIn(userInfo.$id,"CheckIN")}>Check In</Button> :  <Button onClick={() => setChange(true)} className="bg-blue-500 rounded-full">Check OUT</Button> }     
        </div>
        <div className="flex justify-center items-center mt-3 font-semibold">
            <h3>Jul 25, 2024</h3>
        </div>
        <div className="flex flex-col gap-3 mt-2">
        <div className="flex justify-between">
            <h5 className="font-semibold text-sm">IN</h5>
            <div>10:50 AM</div>
        </div>
        <div className="flex justify-between">
            
            <h5 className="font-semibold text-sm">OUT</h5>
            <div>7:50 AM</div>

        </div>
        </div>
      </div>
      <div className="w-[340px] h-[200px] bg-white rounded-xl border-t-4 border-[#8c624a] shadow-md p-4">
        <div className="flex justify-around items-center ">
            <div className="bg-blue-100 flex justify-center  items-center p-4 rounded-full">

          <IoCalendarNumberOutline className="text-3xl "/>
            </div>
        </div>
        <div className="flex justify-center items-center mt-3 font-semibold">
            <h3 className="text-[#8c624a]">Absents</h3>
        </div>
       <h3 className="font-semibold flex justify-center mt-4 text-2xl">3</h3>
      </div>
      <div>
        
      </div>
      
     <div className="w-[480px] h-[200px] bg-white rounded-xl border-t-4 overflow-y-auto border-[#8c624a] shadow-md p-4">
        <div className="flex items-center gap-2">
            <div className="bg-blue-100 flex justify-center  items-center p-4 rounded-full">

          <IoCalendarNumberOutline className="text-3xl "/>
            </div>
           <div className="">
           <h3 className="font-semibold text-gray-700">Attendence</h3>
           <p className="text-xs">(Jul 22 2024 to Jul 28,2024)</p>
           </div>
        </div>
       <div>
       <Table className="w-[440px]">
      <TableHeader>
        <TableRow className="h-4">
          <TableHead className="font-medium text-xs w-[40%]">Date</TableHead>
          <TableHead className="font-medium text-xs w-[20%]">IN</TableHead>
          <TableHead className="font-medium text-xs w-[20%]">OUT</TableHead>
          <TableHead className="text-righ text-xs w-[20%]">DURATION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-[200px] ">
        {invoices.map((invoice) => (
          <TableRow className="h-4 " key={invoice.invoice}>
            <TableCell className="font-medium text-xs">{invoice.date}</TableCell>
            <TableCell className="font-medium w-40  text-xs ">{invoice.in}</TableCell>
            <TableCell className="font-medium text-xs">{invoice.out} </TableCell>
            <TableCell className="text-right text-xs font-medium">{invoice.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
        </TableRow>
      </TableFooter>
    </Table>
       </div>
     </div>
      </div>
     
    </div>
  );
};

export default studentDashboard;
