import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { backUrl } from "../config/config";

import { SIGN_UP_REQUEST } from "../reducers/user";
import { SIGN_UP_SUCCESS } from "../reducers/user";
import { SIGN_UP_FAIL_EMAILOVERLAP } from "../reducers/user";

import { LOG_IN_REQUEST } from "../reducers/user";

//회원가입 saga
function signUpAPI(data) {
  console.log(data);
  return axios.post(backUrl + "/accounts/signup/", data);
}

function* SignUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log("access", result.data);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    const errObject = err.response.data;
    for (var value in errObject) {
      if (value == "email") {
        yield put({
          type: SIGN_UP_FAIL_EMAILOVERLAP,
        });
      } else if (value == "nickname") {
        console.log("nickerror");
      } else if (value == "phone") {
        console.log("phoneerror");
      }
    }

    // yield put({
    //   type: SIGN_UP_FAILURE,
    //   error: err.response.data,
    // });
  }
}

//로그인 saga
function logInAPI(values) {
  return axios.post(backUrl + "/accounts/login/", values);
}

function* LogIn(action) {
  try {
    const result = yield call(logInAPI, action.values);
    console.log("access", result.data);

    // yield put({
    //   type: SIGN_UP_SUCCESS,
    // });
  } catch (err) {
    console.log("fail");
    console.log(err.response);

    // yield put({
    //   type: SIGN_UP_FAILURE,
    //   error: err.response.data,
    // });
  }
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, SignUp);
}
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, LogIn);
}

export default function* userSaga() {
  yield all([fork(watchSignup)]);
  yield all([fork(watchLogin)]);
}
