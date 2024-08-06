import React, { useContext, useEffect, useMemo, useState } from "react";
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
import HourChart from "./HourChart";
import { formatDate } from "date-fns";

const studentDashboard = () => {
  const formatDate = (date) => {
    return date.toISOString().slice(0, 10);
  };
 

  const  {checkIn,userInfo,change,singleAttendance,checkOut} = useContext(Context)
// console.log(singleAttendance)
// console.log("userInfo " ,userInfo);
// console.log(checkIn);
const today = new Date();
const endDate = new Date(today);
const startDate = new Date(today);
startDate.setDate(startDate.getDate() - 6); // 7-day range including today

// Filter and sort the records
const filteredAttendance = useMemo(() => {
  return singleAttendance
    .filter(record => {
      const recordDate = new Date(record.date);
      return recordDate >= startDate && recordDate <= endDate;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, most recent first
}, [singleAttendance, startDate, endDate]);

// Get the latest 7 records
const displayedAttendance = filteredAttendance.slice(0, 7);

  return (
    <div className="w-full lg:h-[87vh]  h-auto  bg-[#eeeeee] rounded-md shadow-md p-6 ">
     <div className="flex lg:justify-between justify-center flex-wrap gap-4 ">
     <div className="md:w-[340px] w-full h-[200px] bg-white rounded-xl border-t-4 border-blue-500 shadow-md p-4">
        <div className="flex justify-around items-center ">
            <div className="bg-blue-100 flex justify-center  items-center p-4 rounded-full">

          <IoCalendarNumberOutline className="text-3xl "/>
            </div>
        {change ?  <Button className="bg-blue-500 rounded-full" onClick={() => checkIn(userInfo.$id,"CheckIN")}>Check In</Button> :  <Button onClick={() => checkOut()} className="bg-blue-500 rounded-full">Check OUT</Button> }     
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
      <div className="md:w-[340px] w-full h-[200px] bg-white rounded-xl border-t-4 border-[#8c624a] shadow-md p-4">
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
      
      <div className="md:w-[480px] w-full h-[200px] bg-white rounded-xl border-t-4 overflow-y-auto border-[#8c624a] shadow-md p-4">
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 flex justify-center items-center p-4 rounded-full">
          <IoCalendarNumberOutline className="text-3xl" />
        </div>
        <div className="">
          <h3 className="font-semibold text-gray-700">Attendance</h3>
          <p className="text-xs">{formatDate(startDate)} to {formatDate(endDate)}</p>
        </div>
      </div>
      <div>
        <Table className="lg:w-[440px] w-full">
          <TableHeader>
            <TableRow className="h-4">
              <TableHead className="font-medium text-xs w-[35%]">Date</TableHead>
              <TableHead className="font-medium text-xs w-[20%]">IN</TableHead>
              <TableHead className="font-medium text-xs w-[20%]">OUT</TableHead>
              <TableHead className="text-right text-xs w-[25%]">DURATION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-[200px]">
            {displayedAttendance.map((invoice) => (
              <TableRow className="h-4" key={invoice.$id}>
                <TableCell className="font-medium text-xs">{invoice.date.slice(0, 10)}</TableCell>
                <TableCell className="font-medium text-xs">{invoice.intime}</TableCell>
                <TableCell className="font-medium w-40 text-xs">{invoice.outtime}</TableCell>
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

     
     <HourChart/>

      </div>
     
    </div>
  );
};

export default studentDashboard;
