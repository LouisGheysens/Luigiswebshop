import * as actionTypes from '../constants/orderConstants';

export const orderReducer = (state = {}, action) =>{
    switch(action.type){
        case actionTypes.ORDER_POST_REQUEST:
            return{
                loading: true,
            }

            case actionTypes.ORDER_POST_SUCCES:
                return{
                    loading: false,
                    succes: true,
                    order: action.payload,
                }
                
                case actionTypes.ORDER_POST_FAIL:
                    return{
                        loading: false,
                        error: action.payload,
                    }
                    default:
                        return state
    }
}