import { Suspense } from "react";

export default function StoryDisplay({title,story}:{title:string,story:string|null}){
    return (

        <div className="p-8 m-4 ">
            
        <h1 className="pb-2 text-3xl text-center">{title}</h1> 
        <Suspense fallback={<p>Loading story...</p>}>
        <div className="whitespace-pre-line">{story}</div>
        </Suspense>
         
     </div>
    )
}