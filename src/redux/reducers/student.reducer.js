import { combineReducers } from "redux";
const student = (state = [], action) => {
    switch (action.type) {
      case 'SET_STUDENT':
        return action.payload;
      // case 'ADD_TO_SHELF':
      //   return [...state, state];
      // case 'DELETE_ITEM':
      //   return [...state];
      default:
        return state;
  
    }
  };
  const checkInTime = (state =[], action) =>{
    switch (action.type){
        case 'SET_TIME':
            return action.payload;
        default: 
            return state; 
    }
  }
  const checkOutTime = (state = [], action) =>{
    switch (action.type){
        case 'SET_CHECKOUT':
            return action.payload;
        default:
            return state; 
    }
  }
  export default combineReducers({
    student, 
    checkInTime, 
    checkOutTime, 
  })