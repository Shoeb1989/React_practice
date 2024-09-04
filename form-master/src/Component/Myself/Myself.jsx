import Spacial from "../Spacial/Spacial";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section>
                <Spacial  asset={asset} ></Spacial>
                <p>Has: {asset}</p>
            </section>
        </div>
    );
};

export default Myself;