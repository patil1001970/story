
import OpenAI from 'openai';
import { useEffect, useState } from "react";
const cheerio = require('cheerio');
 

export async function processData(story:String,words:String) {

    const openai = new OpenAI({
        apiKey: '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',
        baseURL: 'https://integrate.api.nvidia.com/v1',
      })
  const completion = await openai.chat.completions.create({
    model: "meta/llama-3.1-405b-instruct",
    messages: [{"role":"user","content":`Rewrite this story '''${story}''' using these '''${words}'''. The objective is to understand and remember these words.}`}],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 1024,
    stream: false
  })
   
 return (completion.choices[0]?.message?.content);

  
}


export async function getStory(link:string){
// Fetch the HTML page
const rs=await fetch(link)
	.then((response: { text: () => any; }) => response.text())
	.then((html: any) => {
		// Load the HTML into cheerio
		const $ = cheerio.load(html);
		const heading=$('h1');
		// Extract all <p> tags
		const pTags = $('p');
		
		// Extract the text content from each <p> tag
		const pContent = pTags.map((i: any, p: any) => $(p).text()).get();
        const Headings = heading.map((i: any, p: any) => $(p).text()).get();
		
		// Print the extracted content
        return [Headings,pContent]
        
	});
    return rs;
	
    
}