import { useEffect, useState } from "react"
import ReadFile from "./spost";

export default function Posts(){
 
    const [posts, SetPosts] = useState([]);

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then( data => SetPosts(data))


    },[])

    return(
        <div>POST:{posts.length}
        {
            posts.map(post => <ReadFile datas={post}></ReadFile>)
        }

        </div>
       
    
    )
}