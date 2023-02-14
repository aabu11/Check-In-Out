import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddStudent() {
  const dispatch = useDispatch();
  const newStudent = useSelector((store) => store.newStudent);
  const user = useSelector((store) => store.user);
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [parentInput, setParentInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const handleAddStudent = (event) => {
    event.preventDefault();
    let newStudentToAdd = {
      name: nameInput,
      age: ageInput,
      address: addressInput,
      parent_info: parentInput,
      phone_number: phoneInput,
    };
    dispatch({
      type: "POST_STUDENT",
      payload: newStudentToAdd,
    });
  };

  return (
    <>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={ageInput}
          onChange={(event) => setAgeInput(event.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={addressInput}
          onChange={(event) => setAddressInput(event.target.value)}
        />
        <input
          type="text"
          placeholder="Parent Info"
          value={parentInput}
          onChange={(event) => setParentInput(event.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneInput}
          onChange={(event) => setPhoneInput(event.target.value)}
        />
        <input type="submit" value="Add New Student" />
      </form>
    </>
  );
}

export default AddStudent;
