import axios from "axios";
import { func } from "prop-types";
import { takeEvery, put } from "redux-saga/effects";


function* getStudent() {
  try {
    const response = yield axios.get('/api/student')
    // console.log(response.data);
    yield put({ type: 'SET_STUDENT', payload: response.data })
  } catch (error) {
    console.error('Error getShelf in student.saga.js:', error);
  }
}

function* addStudent(action){
    try {
      const response = yield axios.post('/api/student', action.payload);
      console.log( response); 
      yield put ({ type: 'FETCH_STUDENT' });
    } catch (error){
      console.log('Error with addStudent in StudentTable', error)
    }
  }
  function* getTime(action){
    try {
        const response = yield axios.post('/api/student/checkin', action.payload);
        console.log(response);
        yield put ({type: 'SET_TIME', payload: response.data});
    } catch (error){
        console.log('Error in getTime in StudentCheck', error)
    }
  }
  function* getCheckOut(action){
    try {
        const response = yield axios.post('/api/student/checkout', action.payload);
        console.log(response);
        yield put ({type: 'SET_CHECKOUT', payload:response.data});
    } catch (error){
        console.log('Error in getCheckOut', error)
    }
  }
  function* studentSaga() {
    yield takeEvery('FETCH_STUDENT', getStudent)
    yield takeEvery('ADD_STUDENT', addStudent)
    yield takeEvery('FETCH_TIME', getTime)
    yield takeEvery('FETCH_CHECKOUT', getCheckOut)
  }
export default studentSaga;