import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetCondext = createContext('Gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = 'diamond';
    const [money, setmoney] = useState(1000);

    return (
        <div className="grandpa" >
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setmoney]} >
            <AssetCondext.Provider value="gold" >
            <section className="flex" >
            <Dad asset ={asset} ></Dad>
            <Uncle asset={asset} ></Uncle>
            <Aunt></Aunt>
            </section>
            </AssetCondext.Provider>
            </MoneyContext.Provider>


        </div>
    );
};

export default Grandpa;