

const User = ({user}) => {
  const {id, name, email, phone} = user;
  const userStyle = {
    border: '2px solid yellow',
    padding: '10px',
    borderRadius: '10px',
  }

    return (
        <div style={userStyle} >
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>phone:{phone}</p>
            
        </div>
    );
};

export default User;