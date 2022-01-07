import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = ({ click }) => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
               <h2>Luigi's webshop</h2> 
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                    Winkelmandje
                    <span className="cartlogo__badge">{getCartCount()}</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    Producten
                    </Link>
                </li>

                <li>
                    <Link to="/form">
                        Vragen
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </nav>
    )
}

export default Navbar
