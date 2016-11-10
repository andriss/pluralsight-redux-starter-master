import * as types from '../actions/actionTypes';

export default function ideaReducer(state = [], action) {
    if (action.type === types.LOAD_IDEAS_SUCC) {
        return action.ideas;
    }
    else { 
        return state;
    }  
}