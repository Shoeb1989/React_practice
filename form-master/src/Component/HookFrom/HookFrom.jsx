import useInputstate from "../../Hooks/Useinputstate";


const HookFrom = () => {

    const [name, handlenamechange ] = useInputstate('Rojini hooks')

    const handlesubmit = e =>{
        e.preventDefault();
        console.log('Fromdata', name)
    }

    return (
        <div>
            <div>
             <form onSubmit={handlesubmit} >
                 <input value={name} onChange={handlenamechange}
                  type="text" name="name" placeholder="Name" /><br />
                 <input type="email" name="email"  placeholder="Email" />
                 <br />
                 <input type="submit" value="Submit" />
             </form>
         </div>
        </div>
    );
};

export default HookFrom;