
import { useEffect, useState } from "react";
import { getStory, processData } from "./utils";
import StoryDisplay from "../comps/storyDisplay";
import SideBar from "../comps/sideBar";
import {data} from '@/app/learn/data'
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";





export default async function Page({
    params:{chapter_index},
    searchParams:{input_words}

}:{
    params:{chapter_index:Number},
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
    console.log(link)
    
return (
    <div className="flex">
<div><SideBar/></div>

  <div> <StoryDisplay title={title} story={story}></StoryDisplay></div>
   </div>
)
}