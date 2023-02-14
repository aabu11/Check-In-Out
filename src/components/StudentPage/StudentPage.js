import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentCheck from "./StudentCheck";
function StudentPage() {
  const dispatch = useDispatch();
  const student = useSelector((store) => store.student.student);
  const user = useSelector((store) => store.user);
  const [studentInput, setStudentInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [parentInput, setParentInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  useEffect(() => {
    dispatch({
      type: "FETCH_STUDENT",
    });
  }, []);
  const addStudent = (event) => {
    event.preventDefault();

    let newStudent = {
      name: studentInput,
      age: ageInput,
      address: addressInput,
      parent_info: parentInput,
      phone_number: phoneInput,
    };
    console.log("newStudent:", newStudent);

    dispatch({
      type: "ADD_STUDENT",
      payload: newStudent,
    });
  };
  return (
    <>
      <h2> Student List </h2>
      <ul>
        {student.map((student) => (
          <StudentCheck key={student.id} student={student} />
        ))}
      </ul>
    </>
  );
}
export default StudentPage;
