import Friend from "../Friend/Friend";
import Spacial from "../Spacial/Spacial";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            
            { asset && <Spacial asset = {asset} ></Spacial> }
            {name === 'sohani' && <Friend></Friend>}
           </div>
    );
};

export default Cousin;