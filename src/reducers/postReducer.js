import {FETCH_POSTS, NEW_POST} from '../actions/postActions';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    console.log('action.type: ', action.type);
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            console.log('post reducer');
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}