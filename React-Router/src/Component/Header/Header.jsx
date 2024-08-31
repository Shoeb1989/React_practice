import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav> 

                <Link to="/" >HOME</Link>
                <Link to="/about" >ABOUT</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/posts">POSTS</Link>



              
            </nav>


        </div>
    );
};

export default Header;