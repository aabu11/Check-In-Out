import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import studentReducer from "../../redux/reducers/student.reducer";

function Edit_Student() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory(); 
  const editStudentInfo = useSelector((store) => store.editStudentInfo);
  useEffect(() => {
    console.log("Params.id should work", params.id);
    dispatch({
      type: "SAGA_EDIT_STUDENT",
      payload: params.id,
    });
  }, []);
  console.log("SHould work in the useEffect in Edit_Student");

  const handleNameChange = (evt) => {
    dispatch({
      type: "SET_NAME",
      payload: evt.target.value,
    });
  };
  const handleAgeChange = (evt) => {
    dispatch({
      type: "SET_AGE",
      payload: evt.target.value,
    });
  };
  const handleAddressChange = (evt) => {
    dispatch({
      type: "SET_ADDRESS",
      payload: evt.target.value,
    });
  };
  const handleParentInfoChange = (evt) => {
    dispatch({
      type: "SET_PARENT_INFO",
      payload: evt.target.value,
    });
  };
  const handlePhoneNumberChange = (evt) => {
    dispatch({
      type: "SET_PHONE_NUMBER",
      payload: evt.target.value,
    });
  };
  const handleSubmittButton = (evt) =>{
        console.log("Testing Submitt Button", handleSubmittButton)
    evt.preventDefault ();
    dispatch({
        type: 'UPDATE_STUDENT',
        payload: editStudentInfo
    })
    history.push('/student')
  }
  return (
    <div>
      <h2> Edit Student:</h2>

      <form>
        <input
          onChange={handleNameChange}
          value={editStudentInfo.name}
          type="text"
        />
        <input
          onChange={handleAgeChange}
          value={editStudentInfo.age}
          type="text"
        />
        <input
          onChange={handleAddressChange}
          value={editStudentInfo.address}
          type="text"
        />
        <input
          onChange={handleParentInfoChange}
          value={editStudentInfo.parent_info}
          type="text"
        />
        <input
          onChange={handlePhoneNumberChange}
          value={editStudentInfo.phone_number}
          type="text"
        />
        <button onClick={handleSubmittButton}> Submit </button>
      </form>
    </div>
  );
}
export default Edit_Student;

// 1. student on console page, get each iinput from database. Learn how to establish edit page route with each student info
