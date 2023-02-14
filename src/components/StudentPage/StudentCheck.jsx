import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import swal from 'sweetalert';
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
function StudentCheck({ student }) {
  const checkIns = useSelector((store) => store.student.checkInTime);

  const dispatch = useDispatch();
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

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
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
        
      </CardActions>
    </Card>
  );
}

export default StudentCheck;

// 1. create function
//     create console
//     check with button
//     console
