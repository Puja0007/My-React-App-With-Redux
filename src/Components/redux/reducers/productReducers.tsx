import {ActionTypes} from '../constants/action-type';

const initialTodoState = {
    todoProducts: [],
}






export const getTodoProductReducer = (state=initialTodoState,{type, payload:PayloadData}) => {

    switch(type) {
        case ActionTypes.SET_TODO_PRODUCTS:
            return {
                ...state,
                todoProducts: payload
            }
    }
     

}

export interface PayloadData {
    todoProducts:{}
}