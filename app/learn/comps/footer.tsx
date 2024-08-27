'use client'

import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Link from 'next/link'


export default function Footer({chapter_index}:{chapter_index:string}){
   const searchParams = useSearchParams()
   const search = searchParams.get('input_words')
   const ne=parseInt(chapter_index)+1;
   const pe=parseInt(chapter_index)-1;
  

 
   
   return <div className="relative flex bottom-0 justify-center ">
      <Link  className='flex-auto text-center' key={`${pe}`} href={{pathname:`/learn/${pe}`,query:{input_words:search}}}  prefetch={true}> 
      <ArrowLeftIcon className='w-8 inline-block'/>
       </Link>
       <Link className='flex-auto px-4 text-center' key={`${ne}`} href={{pathname:`/learn/${ne}`,query:{input_words:search}}}> 
      <ArrowRightIcon className='w-8 inline-block'/>
       </Link>
    </div>
}