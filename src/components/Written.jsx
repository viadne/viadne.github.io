  import { useEffect, useState } from "react";
  import ReactMarkdown from "react-markdown"; 
  import { useParams } from "react-router";


  const Written =  () => {
    const {writtenFile} = useParams()
    const [content, setContent] = useState("");

    // console.log(content)

    useEffect( () => {
      
      const fetchMarkdown = async () => {
        const res = await fetch(`/assets/writtens/${writtenFile}`);
        const str = await res.text();
        setContent(str);

      };
      
      if (writtenFile) fetchMarkdown();
    }, [writtenFile])

    return <div>
      {/* <ReactMarkdown>
        {`# Hello, *World*!`}
      </ReactMarkdown> */}
      <img src="/assets/img/260410_c.svg"></img>
      <a href="/" className="underline absolute left-10 top-10">Back</a>
      <div className="w-120 text-left">
        <ReactMarkdown >{content}</ReactMarkdown>
      </div>

    </div>
  }

  export default Written