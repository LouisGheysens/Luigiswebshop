import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];
    if(show){
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCarCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };



    return <div className={sideDrawerClass.join(" ")}>

        <ul className="sidedrawer__links" onClick={click}>
        <li>
        <Link to="/cart">
        <i class="fa fa-cart-plus" aria-hidden="true"></i>
            <span>
                Cart <span className="sidedrawer__cartbadge">{getCarCount()}</span>
            </span>
        </Link>
        </li>
        <li>
            <Link to="/">
            Shop
            </Link>
        </li>
        </ul>
    </div>
};

export default SideDrawer
