import { ADD_CHARACTER } from '../actions';
import {createCharacter} from './helper'


function heroes(state = [], action) {
    switch(action.type){
        case ADD_CHARACTER:
        return [ ...state , createCharacter(action.id)];
        default: 
            return state;
    }
}


export default heroes;