import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { backUrl } from "../config/config";

import {} from "../reducers/menu";

//로그인 saga
function getMenuAPI(values) {
  return axios.post(backUrl + "/api/items/", values);
}

function* GetMenu(action) {
  try {
    const result = yield call(getMenuAPI, action.values);
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

function* getMenu() {
  yield takeLatest(REQUEST_GET_MENU, GetMenu);
}

export default function* userSaga() {
  yield all([fork(getMenu)]);
}
