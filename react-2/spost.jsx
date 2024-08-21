import Posts from './posts'
import './sposts.css'
export default function ReadFile({datas}){


    const {title, body, id, userId} = datas;

   return (
    
    <div className='sports' >
        <h5>Title:{title}</h5>
        <p><small>UserID:{userId}</small></p>
        <p><small>PostID:{id}</small></p>
        <p></p> 
    </div>
   )
}