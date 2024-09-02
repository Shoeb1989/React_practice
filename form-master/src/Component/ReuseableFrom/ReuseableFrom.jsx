
const ReuseableFrom = ({fromtitle, handlesubmit, submitupdate = 'Submit' }) => {
   
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value
            
        }

        handlesubmit(data);
    }
    return (
        <div>
            <h2>{fromtitle}</h2>
            <div>
             <form onSubmit={handleLocalSubmit} >
                 <input type="text" name="name" placeholder="Name" /><br />
                 <input type="email" name="email"  placeholder="Email" />
                 <br />
                 <input type="submit" value={submitupdate}/>
             </form>
         </div>
        </div>
    );
};

export default ReuseableFrom;