
export default function StoryDisplay({title,story}:{title:string,story:string}){
    return (
        <div className="p-8 m-4 w-screen">
        <h1 className="pb-2 text-3xl text-center">{title}</h1> 
        <div className="whitespace-pre-line">{story}</div>
         
     </div>
    )
}