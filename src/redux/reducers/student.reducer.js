import { combineReducers } from "redux";
const student = (state = [], action) => {
    switch (action.type) {
      case 'SET_STUDENT':
        return action.payload;
      default:
        return state;
  
    }
  };
  const newStudent = (state = [], action) => {
    switch (action.type) {
      case 'FETCH__NEW_STUDENT':
        return action.payload;
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
  const deleteTime =(state =[], action) =>{
    switch (action.type){
        case 'DELETE_ROW':
            return action.payload;
        default: 
            return state; 
    }
  }
  export default combineReducers({
    student, 
    checkInTime, 
    checkOutTime, 
    deleteTime,
    newStudent
  })