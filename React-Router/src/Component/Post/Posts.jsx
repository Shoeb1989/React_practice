import { useLoaderData } from "react-router-dom";
import Post from "../Posts/Post";
import './posts.css'


const Posts = () => {

    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.length} </h2>
            <div className="users" >
                {
                    posts.map(post => <Post key={post.id} post={post} ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;