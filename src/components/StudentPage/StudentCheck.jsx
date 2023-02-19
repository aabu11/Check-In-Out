import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import swal from 'sweetalert';
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
function StudentCheck({ student }) {
  const checkIns = useSelector((store) => store.student.checkInTime);

  const dispatch = useDispatch();
  const history = useHistory(); 
  useEffect (() =>{
    dispatch({
      type: 'FETCH_STUDENT'
    })
  },[])
  const checkIn = () => {
    var time = new Date();
    swal(`STUDENT IS CHECKED IN ${student.name}`);
    console.log(
      time.toLocaleString("en-US", { hour: "numeric", hour12: true })
    );
    dispatch({
      type: "FETCH_TIME",
      payload: { checkIn: time, student: student.id },
    });
  };
  const checkOut = (id) => {
    console.log("This a test", id);
    const time = new Date();
    swal('STUDENT IS CHECKED OUT');
    dispatch({
      type: "FETCH_CHECKOUT",
      payload: { checkOut: time, id },
    });
  };
  const resetButton = (id) => {
    dispatch({
      type: "SAGA_DELETE_ROW",
      payload: student.id,
    });
    swal("Are you sure you want to do this?", {
        buttons: ["NO!", "YES!"],
      });
  };
  const editStudentButton = () =>{
    console.log('Testing This Button')
    history.push(`/student/edit/${student.id}`)
   
  }
  const deleteButton = () =>{
    dispatch ({
      type: "SAGA_DELETE_STUDENT",
      payload:student.id
    })
  }
  if(student.checkedIn === true){
  return (
    <Card variant="outlined" sx={{ minWidth: 275, backgroundColor: 'green' }}>
      <CardContent>
        <div>Child Name: {student.name}</div>
        <div>Child Age: {student.age}</div>
      </CardContent>
      <CardActions>
        <Button onClick={checkIn} size="small">
          Check In Student
        </Button>
        <Button
          onClick={() => {
            checkOut(student.id);
          }}
          size="small"
        >
          Check Out Student
        </Button>
        <Button onClick={resetButton} size="small" >
          Reset
        </Button>
        <Button onClick={editStudentButton} size="small" >
          Edit Student Info
        </Button>
        <Button onClick={deleteButton} size="small" >
          Delete Student
        </Button>
      </CardActions>
    </Card>
  );}else{
    return (
      <Card variant="outlined" sx={{ minWidth: 275, }}>
        <CardContent>
          <div>Child Name: {student.name}</div>
          <div>Child Age: {student.age}</div>
        </CardContent>
        <CardActions>
          <Button onClick={checkIn} size="small">
            Check In Student
          </Button>
          <Button
            onClick={() => {
              checkOut(student.id);
            }}
            size="small"
          >
            Check Out Student
          </Button>
          <Button onClick={resetButton} size="small" >
            Reset
          </Button>
          <Button onClick={editStudentButton} size="small" >
            Edit Student Info
          </Button>
          <Button onClick={deleteButton} size="small" >
            Delete Student
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default StudentCheck;
