import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='w-full flex justify-between items-center h-12 border md:px-10 sticky top-0 px-2 bg-gray-400'>
        {/* Left side */}
        <div>
            <div className='border h-8 w-8 rounded-full bg-yellow-300 cursor-pointer'>

            </div>
        </div>
        {/* center */}
        <div className='hidden md:block'>
            <ul className='flex items-center space-x-5'>
                <Link to={"/"} className='border p-1 cursor-pointer'>HOME</Link>
                <li className='border p-1 cursor-pointer'>ABOUT</li>
                <li className='border p-1 cursor-pointer'>CONTECT</li>
                <li className='border p-1 cursor-pointer'>HIRE ME</li>
                <Link to={"/Organization"} className='border p-1 cursor-pointer'>ORGENIGETION</Link>
            </ul>
        </div>
        {/* Right */}
         <div className='md:block hidden'>
            <div className='border h-8 w-8 rounded-full bg-yellow-300 cursor-pointer'>

            </div>
        </div>
       <div className="md:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="outline">
              <CiMenuFries size={22} />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="w-[260px]">
            <DrawerHeader>
              <DrawerTitle>
                <div className='p-3 bg-green-400 flex w-fit rounded-full'></div>
              </DrawerTitle>
            </DrawerHeader>

            <ul className="px-4 space-y-4">
        <li className='border p-1 cursor-pointer'>HOME</li>
                <li className='border p-1 cursor-pointer'>ABOUT</li>
                <li className='border p-1 cursor-pointer'>CONTECT</li>
                <li className='border p-1 cursor-pointer'>HIRE ME</li>
                <li className='border p-1 cursor-pointer'>ORGENIGETION</li>
            </ul>

            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
        </div>
    
  )
}

export default Navbar