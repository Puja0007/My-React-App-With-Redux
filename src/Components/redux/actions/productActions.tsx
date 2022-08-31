import { ActionTypes } from "../constants/action-type";
import { PayloadData } from "../reducers/productReducers";
export const getTodoProducts = (product:any)=>{
    return{
        type: ActionTypes.SET_TODO_PRODUCTS,
        payload: product
    }
}

export const getPostProducts = (product:PayloadData)=>{
    return{
        type: ActionTypes.SET_POST_PRODUCTS,
        payload: product
    }
}

