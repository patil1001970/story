'use client'
import { Button } from "@/app/ui/button";
import { ArrowRightIcon, ChatBubbleBottomCenterIcon, PaperAirplaneIcon, WalletIcon } from "@heroicons/react/24/outline"
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react"

export default function GetWords ({textareaValue,setTextareaValue,chapter_index}:{textareaValue:any,setTextareaValue:any,chapter_index:string}){
    
  const handleInputChange = (event:any) => {
    setTextareaValue(event.target.value);
  };
    const [display,setDisplay]=useState(true);
return (
    <div>
    <span onClick={()=>(setDisplay((display)=>!display))} className="absolute right-0">
        <WalletIcon className=" w-10"/>
    </span>
<div className={clsx(" absolute flex items-center bottom-0 w-full p-2",{
    "hidden":display
})}>
    <textarea 
    value={textareaValue}
    onChange={handleInputChange}
    rows={5}
  className={clsx(" md:w-1/2 items-center    w-full mx-auto m-4 p-4 border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50",{
  })}

>


</textarea>
<Link className=' flex-auto px-4 text-end' key={`${chapter_index}`} href={{pathname:`/learn/${chapter_index}`,query:{input_words:textareaValue}}}> 
     <PaperAirplaneIcon className="w-8"/>
       </Link>

</div>
    </div>
)
}
