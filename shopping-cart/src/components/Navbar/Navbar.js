import React from "react";
import { menuItems } from "./Menu";
import './Navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";
const Navbar = () => {

    // const [count, setCount] = useState(0);

    const menu = menuItems.map(({ name, url }, index) => {
        return (<li key={index}>< Link to = {url} >{name}</Link></li >
        );    
    });

    return (<nav>
        <div className="logo">
            <h1>  Perfecta </h1>
        </div>
        <ul className="menu-list">{menu}
            <li><Link to="/cart"><FaShoppingCart color='rgb(26, 26, 26)' size={25} /></Link></li>
        </ul>
    </nav>);
}

export default Navbar;