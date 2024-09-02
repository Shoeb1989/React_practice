
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex' >
                <Cousin name = {'Shoeb'} ></Cousin>
                <Cousin name = {'Sikder'} ></Cousin>
            </section>
        </div>
    );
};

export default Uncle;