import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { backUrl } from "../config/config";

import { LOG_IN_REQUEST } from "../reducers/user";

function* logIn(action) {
  axios.post(backUrl + "/accounts/signup", action.data).then((response) => {
    console.log(response.data);
  });
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

export default function* userSaga() {
  yield all([fork(watchLogIn)]);
}
