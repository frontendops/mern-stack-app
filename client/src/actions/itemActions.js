import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';



export const getItems = () => dispatch => {
    dispatch(loadItems());

    axios.get('http://localhost:5000/routes/api')
    .then(res => dispatch({
        type: GET_ITEMS,
        payload: res.data
    })
  )
};

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};

export const addItem = item => {
    return {
        type: ADD_ITEMS,
        payload: item
    };
};

export const loadItems = () => {
    return {
        type: ITEMS_LOADING
    };
};
