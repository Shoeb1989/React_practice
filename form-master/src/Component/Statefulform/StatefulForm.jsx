import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] =  useState(null);
    const [password, setPassword] =  useState(null);
    const [name, setName] =  useState(null);


    const handlesubmitt = e => {
    e.preventDefault();
    console.log(email, password, name);
    }

    const handleEmailChange = e => {
    console.log(e.target.value);
    setEmail (e.target.value);
    }
    
    const Handlepasss = e => {
        setPassword(e.target.value);
    }
    
    const handleName = e => {
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handlesubmitt} >
                <input onChange={handleName }
                 type="text" name="name" placeholder="Name" /><br />
                <input onChange={handleEmailChange}
                 type="email" name="email" required  placeholder="Email" /><br />
                <input onChange={Handlepasss}
                 type="password" value="password"/>
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;