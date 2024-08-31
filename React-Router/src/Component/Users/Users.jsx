import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
     const users = useLoaderData()


    // state 
    // state --> loader
    // use effect
    // fetch --> state set --> set state

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} ></User> )
                }
            </div>
        </div>
    );
};

export default Users;