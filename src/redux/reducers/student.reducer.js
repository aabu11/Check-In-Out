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
  
  export default student;