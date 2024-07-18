import React, { useContext } from 'react'
import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
  } from "lucide-react"
  
  import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { Context } from '@/Context/Context'
import { LuGraduationCap } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";

const Homes = () => {
  const { studentData } = useContext(Context);
  console.log(studentData.length);

  return (
    <div className='w-full'>
        <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              
            </div>
          <div className='w-full h-[82vh] bg-white shadow-lg p-6'>
            <h1 className='text-2xl mb-6 font-bold'>Dashboard</h1>
           <div className='flex justify-between'>
           <div className='w-[32%] h-[110px] shadow-md flex items-center rounded-lg p-4 bg-[#b2e2fc]'>
           <div className='flex gap-8'>
           <div className='w-12 h-12 rounded-full flex items-center justify-center bg-white'>
            <LuGraduationCap  className='text-3xl'/>
            </div>
           <div>
           <h2 className='text-lg font-semibold'>Total Students</h2>
           <h3 className='font-semibold'>{ studentData.length}</h3>
           </div>
           </div>
            </div>
            <div className='w-[32%] h-[110px] shadow-md flex items-center rounded-lg p-4 bg-[#b2e2fc]'>
           <div className='flex gap-8'>
           <div className='w-12 h-12 rounded-full flex items-center justify-center bg-white'>
            <IoIosTrendingUp   className='text-3xl'/>
            </div>
           <div>
           <h2 className='text-lg font-semibold'>Total Present</h2>
           <h3 className='font-semibold'>{ studentData.length}</h3>
           </div>
           </div>
            </div>
            <div className='w-[32%] h-[110px] shadow-md flex items-center rounded-lg p-4 bg-[#b2e2fc]'>
           <div className='flex gap-8'>
           <div className='w-12 h-12 rounded-full flex items-center justify-center bg-white'>
            <IoIosTrendingDown  className='text-3xl'/>
            </div>
           <div>
           <h2 className='text-lg font-semibold'>Total Absent</h2>
           <h3 className='font-semibold'>{ studentData.length}</h3>
           </div>
           </div>
            </div>
           </div>
          </div>
          </Tabs>
    </div>
  )
}

export default Homes