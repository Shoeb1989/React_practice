import { useEffect, useRef } from "react";

const RefFrom = () => {

    const nameRef = useRef(null);
    const emailRef =  useRef(null);

    useEffect( () => {
        nameRef.current.focus()

    },[])

    const handleRef = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);


 npm 
    }
    return (
        <div>
            <form onSubmit={handleRef} >
                 <input ref={nameRef} 
                  type="text" name="name" placeholder="Name" /><br />
                 <input ref={emailRef}
                 type="email" name="email"  placeholder="Email" />
                 <br />
                 <input type="submit" value="Submit" />
             </form>
        </div>
    );
};

export default RefFrom;