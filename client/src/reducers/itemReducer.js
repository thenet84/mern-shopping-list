import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Egg' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Rockets' },
    { id: uuid(), name: 'Candy' },
  ]
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state;
  }
}