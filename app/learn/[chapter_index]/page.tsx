
import { Suspense, useEffect, useState } from "react";
import { getStory, processData } from "./utils";
import StoryDisplay from "../comps/storyDisplay";
import SideBar from "../comps/sideBar";
import {data} from '@/app/learn/data'
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import GetWords from "../comps/getWords";
import Footer from "../comps/footer";





export default async function Page({
    params:{chapter_index},
    searchParams:{input_words}

}:{
    params:{chapter_index:number},
    searchParams: { input_words:string }
}){
    const words=`admonish
aesthetic
affection
alleviate
analogous
bolster
chauvinistic
connoisseur
dissemble
dogged
dupe
empirical
engender
entitled
pertinacious
presumptuous
probity
proliferate
specious
spurious
subjective
subvert
timorous
tortuous
tractable
transient
ubiquitous
underscore
venal
Venerate`;

    const link=`https://youzitsu.surge.sh/${data[chapter_index].href}`;
    const [title,context]=await getStory(link);
    const story= await processData(context,input_words);

    console.log(context)
return (
    <div >
        
<div><SideBar input_words={input_words} chapter_index={`${chapter_index}`} /></div>

  <div> <StoryDisplay title={title} story={story}></StoryDisplay></div>
  
  <Footer chapter_index={`${chapter_index}`} />
   </div>
  
)
}