import { Link } from "react-router-dom";

const Post = ({post}) => {
    
    const {id, title} = post;

    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px',
      }
    

    return (
        <div style={postStyle} >
            <h4>Post Of Id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
        </div>
    );
};

export default Post;