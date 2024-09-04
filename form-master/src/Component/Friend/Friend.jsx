import { useContext } from "react";
import { AssetCondext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetCondext);
    return (
        <div>
            <h2>Friend</h2>
            <p>Has : {gift}</p>
        </div>
    );
};

export default Friend;