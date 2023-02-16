const editStudentInfo = (state = [], action) => {
  if (action.type === "SET_STUDENT_TO_EDIT") {
    return action.payload;
  } else if (action.type === "SET_NAME") {
    const newNameValue = action.payload;
    return { ...state, name: newNameValue };
  } else if (action.type === "SET_AGE") {
    const newAgeValue = action.payload;
    return { ...state, age: newAgeValue };
  } else if (action.type === "SET_ADDRESS") {
    const newAddressValue = action.payload;
    return { ...state, address: newAddressValue };
  } else if (action.type === "SET_PARENT_INFO") {
    const newParentValue = action.payload;
    return { ...state, parent_info: newParentValue };
  } else if (action.type === "SET_PHONE_NUMBER") {
    const newPhoneValue = action.payload;
    return { ...state, phone_number: newPhoneValue };
  }
  return state;
};

export default editStudentInfo;
