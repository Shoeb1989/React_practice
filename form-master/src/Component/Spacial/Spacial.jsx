import { useContext } from "react";
import { AssetCondext } from "../Grandpa/Grandpa";

const Spacial = ({asset}) => {
    const gift = useContext(AssetCondext)
    return (
        <div>
            <h2>Spacial</h2>
            <p>Has: {asset}</p>
            <p>Also Has: {gift} </p>
        </div>
    );
};
export default Spacial;