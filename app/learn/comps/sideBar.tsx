'use client'
import { clsx } from 'clsx';
import {data} from '@/app/learn/data'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import GetWords from './getWords';
export default function SideBar({chapter_index,input_words}:{chapter_index:string,input_words:string}){
    const [display,setDisplay]=useState(true)
 
    const search = input_words
    const [textareaValue, setTextareaValue] = useState(search); 

    console.log(textareaValue)
    return (
        <div>
            <button  onClick={(display)=>setDisplay((display)=>(!display))} className='h-8 absolute mb-8 transition-all duration-1000'>
                {display ?  <ArrowRightCircleIcon key="right" className='w-12 justify-end'/> : <ArrowLeftCircleIcon key="left" className='w-12 justify-end'/>} 

                </button>
                <GetWords chapter_index={chapter_index} textareaValue={textareaValue} setTextareaValue={setTextareaValue}/>
           
        <div className={clsx("rounded-md max-w-screen-sm ease-in-out absolute top-16 border-2 py-4 scroll-auto bg-neutral-400  transition-transform duration-500 min-h-full z-10",{

            "'translate-x-0'":display,
            "-translate-x-full  ":display==true
        } )}>
             {data.map((i:any,d:Number)=>{
               return <Link key={`${d}`} href={{pathname:`/learn/${d}`,query:{input_words:textareaValue}}}> <div className='w-full text-2xl text-wrap'  >
                <span>{`${d} `}</span>
                {i.title}</div> </Link>
            })}
        </div>
        </div>
    )
}