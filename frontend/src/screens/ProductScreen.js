import React from 'react';
import './ProductScreen.css'
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProductDetails } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartAction';
import { useParams,useNavigate } from 'react-router-dom';


const ProductScreen = () => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const params = useParams();
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
  
    useEffect(() => {
      if (product && params.id !== product._id) {
        dispatch(getProductDetails(params.id));
      }
    }, [dispatch, product]);
  
    const addToCartHandler = () => {
      dispatch(addToCart(product._id, qty));
      navigation(`/cart`);
    };
  

    return (
        <div className="productscreen">
        {loading ? (
        <h2>Loading....</h2>
        ) : error ? (
            <h2>{error}</h2>
        ) : (
            <>
            <div className="productscreen__left">
        <div className="left__image">
            <img src={product.imageUrl} alt={product.name}/>
        </div>

        <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p>Price: €{product.price}</p>
            <p>Description: {product.description}</p>
        </div>
        </div>

        <div className="productscreen__right">
        <div className="right__info">
        <p>
            Price: <span>€{product.price}</span>
        </p>
        <p>
            Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
        </p>
        <p>
            Quantity
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
            {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x+1} value={x+1}>
                {x+1}
                </option>
            ))}
            </select>
        </p>
        <button className="right__button" onClick={addToCartHandler} type="button">Add to cart</button>
        </div>
        </div>
            </>
        )}
        </div>
    );
};

export default ProductScreen
