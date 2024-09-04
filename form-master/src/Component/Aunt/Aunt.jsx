
import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunt = () => {
    const [money, setmoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex' >
                <Cousin name={'Sohana'} ></Cousin>
                <Cousin name={'sohani'} ></Cousin>
            </section>
            <p>Money: {money} </p>
            <button onClick={() => setmoney (money +1000) } > add 1000 tk </button>
        </div> 
    );
};

export default Aunt;