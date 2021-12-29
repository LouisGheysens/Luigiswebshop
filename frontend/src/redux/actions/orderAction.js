import * as actionTypes from '../constants/orderConstants';
import axios from 'axios';

export const postOrder = (Order) => async(dispatch, getState) =>{
    try{
        dispatch({
            type: actionTypes.ORDER_POST_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(`/api/orders`, Order, config)

        dispatch({
            type: actionTypes.ORDER_POST_SUCCES,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: actionTypes.ORDER_POST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}