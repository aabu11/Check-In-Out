import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { func } from "prop-types";
function StudentCheck({ student }) {
  const checkIns = useSelector((store) => store.student.checkInTime);

  const dispatch = useDispatch();
  const checkIn = () => {
    var time = new Date();
    console.log(
      time.toLocaleString("en-US", { hour: "numeric", hour12: true })
    );
    // . alert ('CHECKED IN')
    dispatch({
      type: "FETCH_TIME",
      payload: { checkIn: time, student: student.id },
    });
  };
  const checkOut = (id) => {
    console.log('This a test', id)
    const time = new Date();
    dispatch({
      type: "FETCH_CHECKOUT",
      payload: { checkOut: time, id },
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
          {" "}
          Check Out Studentt
        </Button>
        <Button size="small"> Reset</Button>
      </CardActions>
    </Card>
  );
}

export default StudentCheck;

// 1. create function
//     create console
//     check with button
//     console
