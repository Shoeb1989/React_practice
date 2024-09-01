
const SimpleForm = () => {

    const HandleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('from submit');
    }
    return (
        <div>
            <form onSubmit={HandleSubmit} >
                <input type="text" name="name" placeholder="Name" /><br />
                <input type="email" name="email"  placeholder="Email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;