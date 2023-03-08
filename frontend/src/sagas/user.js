import { all, fork, put, call, takeLatest, throttle } from "redux-saga/effects";
import axios from "axios";
import { backUrl } from "../config/config";

import { SIGN_UP_REQUEST } from "../reducers/user";
import { SIGN_UP_SUCCESS } from "../reducers/user";
import { SIGN_UP_FAIL_EMAILOVERLAP } from "../reducers/user";

import { LOG_IN_REQUEST } from "../reducers/user";
import { SIGN_UP_FAIL_NICKNAMEOVERLAP } from "../reducers/user";

import {
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
} from "../reducers/user";

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
    console.log(errObject);
    for (var value in errObject) {
      if (value == "email") {
        yield put({
          type: SIGN_UP_FAIL_EMAILOVERLAP,
        });
      }
      if (value == "nickname") {
        console.log("닉네임 에러");
        yield put({ type: SIGN_UP_FAIL_NICKNAMEOVERLAP });
      }
      if (value == "phone") {
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

// useEffect(() => {
//   axios.get(backUrl + "/api/main/").then((res) => {
//     const events = res.data.events;
//     const image = [];

//     events.map((url) => {
//       image.push(backUrl + url.image);
//     });
//     setimgurl(image);
//     setmenu(res.data.items);
//   });
// }, []);

function loadPostsAPI() {
  return axios.get(backUrl + "/api/main/");
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId);
    console.log(result.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, SignUp);
}
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, LogIn);
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

export default function* userSaga() {
  yield all([fork(watchSignup)]);
  yield all([fork(watchLogin)]);
  yield all([fork(watchLoadPosts)]);
}
