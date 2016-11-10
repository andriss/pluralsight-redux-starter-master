import * as types from './actionTypes';
import IdeaApi from '../api/solrIdeaApi';

export function loadIdeasSucc(ideas) {
    return { type: types.LOAD_IDEAS_SUCC, ideas }
}

export function loadIdeas() {
    return function(dispatch) {
        return IdeaApi.getAllIdeas().then(x => {
            dispatch(loadIdeasSucc(x));
        });
    }
}