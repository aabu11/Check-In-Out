import axios from "axios";
import { func } from "prop-types";
import { takeEvery, put } from "redux-saga/effects";

function* getStudent(action) {
  try {
    const response = yield axios.get("/api/student", action.payload);

    yield put({ type: "SET_STUDENT", payload: response.data });
  } catch (error) {
    console.error("Error getShelf in student.saga.js:", error);
  }
}

function* newStudent(action) {
  console.log("THIS IS THE newStudent action.payload", action.payload);
  try {
    const response = yield axios.post("/api/student", action.payload);
    console.log(response);
    yield put({ type: "FETCH__NEW_STUDENT", payload: response.data });
  } catch (error) {
    console.log("Error with newStudent in Stuent.saga", error);
  }
}
function* getTime(action) {
  try {
    const response = yield axios.post("/api/student/checkin", action.payload);
    console.log(response);
    yield put({ type: "SET_TIME", payload: response.data });
  } catch (error) {
    console.log("Error in getTime in StudentCheck", error);
  }
}
function* getCheckOut(action) {
  try {
    console.log(action.payload);
    const response = yield axios.put(
      `/api/student/checkout/${action.payload.id}`,
      action.payload
    );
    console.log(response);
    yield put({ type: "SET_CHECKOUT", payload: response.data });
  } catch (error) {
    console.log("Error in getCheckOut", error);
  }
}

function* deleteRow(action) {
  try {
    const response = yield axios.delete(
      `/api/student/${action.payload}`
    );
    // console.log("action.payload:", action.payload.id);
    console.log('action.payload inside deleteRow:', action.payload);
    yield put({ type: "DELETE_ROW", payload: response.data });
  } catch (error) {
    console.log("Error deleteRow in Saga:", error);
  }
}
function* editInfo(action) {
    console.log('Looking', action.payload)
    const idOfStudentToEdit = action.payload;
    const response = yield axios ({
        method: 'GET',
        url: `/api/student/${idOfStudentToEdit}`
    })
    console.log('looking for response', response)
    yield put ({
        type: 'SET_STUDENT_TO_EDIT',
        payload:response.data[0]
    })
}


function* studentSaga() {
  yield takeEvery("FETCH_STUDENT", getStudent);
  yield takeEvery("POST_STUDENT", newStudent);
  yield takeEvery("FETCH_TIME", getTime);
  yield takeEvery("FETCH_CHECKOUT", getCheckOut);
  yield takeEvery("SAGA_DELETE_ROW", deleteRow);
  yield takeEvery('SAGA_EDIT_STUDENT', editInfo)
}
export default studentSaga;
