import './botls.css'

const Botls = ({bottle, handleaddtoCart}) => {

    

    const {name, img, price} = bottle;


     

    return (
        <div className='bottle' >

            <h3>Bottol:{name}</h3>
            <img src={img} alt="" />
            <p>Price:${price}</p>
            <button onClick={() => handleaddtoCart(bottle)}>Purchase</button>
            
        </div>
    );
};

export default Botls;   