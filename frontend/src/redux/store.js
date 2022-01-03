import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReduce'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import throttle from 'lodash/throttle';
import { template } from 'lodash';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});

//2de manier
export const loadState = () =>{
    try{
        const serializedState = localStorage.getItem("cart");
        if(serializedState == null){
            return undefined;
        }
    }catch(err){
        console.log('Fout bij het ophalen van de state!', err);
    }
}

export const saveState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);
    }catch(err){
        console.log("Fout bij het opslaan!");
    }
}

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 500)
);

export default store;