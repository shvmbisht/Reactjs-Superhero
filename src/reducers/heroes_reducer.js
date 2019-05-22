import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import {createCharacter} from './helper'


function heroes(state = [], action) {
    switch(action.type){
        case ADD_CHARACTER:
            return [ ...state , createCharacter(action.id)];
        case REMOVE_CHARACTER:
            return state.filter(hero => { return hero.id !== action.id });
        default:
            return state;
    }
}


export default heroes;