'use client'
import { clsx } from 'clsx';
import {data} from '@/app/learn/data'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
export default function SideBar(){
    const [display,setDisplay]=useState(false)
    const searchParams = useSearchParams()
 
    const search = searchParams.get('input_words')
    return (
        <div>
            <button  onClick={(display)=>setDisplay((display)=>(!display))} className='h-8 relative mb-4 flex transition-all duration-300'>
                {display ? <ArrowLeftCircleIcon className='w-8 justify-end'/>: <ArrowRightCircleIcon className='w-8 justify-end'/>
}
                </button>
           
        <div className={clsx("border-2 p-2 scroll-auto transition-all  min-h-full z-10",{"hidden":display} )}>
             {data.map((i:any,d:Number)=>{
               return <Link href={{pathname:`/learn/${d}`,query:{input_words:search}}}> <div className='w-full text-nowrap'  key={`${d}`}>
                <span>{`${d} `}</span>
                {i.title}</div> </Link>
            })}
        </div>
        </div>
    )
}