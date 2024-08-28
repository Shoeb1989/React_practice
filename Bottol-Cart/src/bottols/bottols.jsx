import React, { useEffect, useState } from 'react';
import Botls from '../botls/botls';
import './bottols.css'
import { addToLS, getStoredCart } from '../utilities/localstroge';


const Bottols = () => {

     

    const [bottol, setbottol] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res => res.json())
        .then(data => setbottol(data))


    }, [])

    useEffect(() => {
        
        const storeCart = getStoredCart

    }, [] )

    const handleaddtoCart = bottle =>{
        const newcart = [...cart, bottle];
        setCart(newcart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h2>Water Bottles :{bottol.length}</h2>
            <h4>Cart:{cart.length}</h4>
           
            <div className='bottol-container'> 
            {
                bottol.map(bottol => <Botls key = {bottol.id} bottle={bottol} handleaddtoCart={handleaddtoCart} ></Botls>)
            }

            </div>
          
              
        </div>
    )
};

export default Bottols;