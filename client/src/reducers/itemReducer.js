import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: "507f1f77bcf86cd799439011", name: 'rice' },
        { id: "507f1f77bcf86cd799439012", name: 'chips' },
        { id: "507f1f77bcf86cd799439013", name: 'ham' },
        { id: "507f1f77bcf86cd799439014", name: 'turkey' }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
        return {
            ...state
        };
        case DELETE_ITEM:
        return {
            ...state,
            items: state.items.filter(chosen => chosen.id !== action.payload)
        };
    default:
        return state;

    }
}
