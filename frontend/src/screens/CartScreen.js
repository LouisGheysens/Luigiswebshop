import React, { useState } from 'react';
import './CartScreen.css'
import CartItem from '../components/CartItem';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import {addToCart, removeFromCart} from '../redux/actions/cartAction';

const CartScreen = () => {

    const [isPending, setIsPending] = useState('false');

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    const getCartCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () =>{
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        setIsPending(true);

        fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        }).then(() =>{
            console.log('Nieuw order toegevoegd!');
            setIsPending(false);
        })
    }


    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go back</Link>
                    </div>
                ) : cartItems.map(item =>(
                    <CartItem 
                    key={item.product} item={item} 
                    v={qtyChangeHandler} r
                    removeHandler={removeHandler}/>
                ))}
            </div>
            <div className="cartscreen__right">
            <div className="cartscreen__info">
            <p>Subtotal: {getCartCount()} items</p>
            <p>€{getCartSubTotal().toFixed(2)}</p>
            </div>
            <div>
                <button method="post" className="checkoutBtn">Proceed to checkout
                </button>
            </div>
            </div>
        </div>
    )
}

export default CartScreen;
