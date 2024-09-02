import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
const Grandpa = () => {
    return (
        <div className="grandpa" >
            <h2>Grandpa</h2>
            <section className="flex" >
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunt></Aunt>
            </section>


        </div>
    );
};

export default Grandpa;