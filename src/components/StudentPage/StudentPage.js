import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function StudentPage() {
  const dispatch = useDispatch();
  const student = useSelector(store => store.student)
  const user = useSelector(store => store.user)
  const [studentInput, setStudentInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [parentInput, setParentInput] = useState('');
  const [phoneInput, setPhoneInput] = useState ('');
  

  useEffect(() => {
    dispatch({
      type: 'FETCH_STUDENT'
    })
  }, [])
  const addStudent = (event) => {
    event.preventDefault();

    let newStudent = {
      name: studentInput,
      age: ageInput,
      address: addressInput,
      parent_info: parentInput,
      phone_number: phoneInput, 


    }
    console.log('newStudent:', newStudent)

    dispatch({
      type: 'ADD_STUDENT',
      payload: newStudent
    })

}
return (
    <div> Student List 

    </div>
)
}
export default StudentPage; 