import axios from "axios";

import produce from "immer";

export const initialState = {
  logInLoading: false,
  logInDone: false, //로그인 시도중
  logInError: null,
  logOutLoading: false, //로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  postUpLoading: false,
  postUpDone: false,
  postUpError: null,
  me: null,
  meAddress: null,
  signUpDate: {},
  loginData: {},

  emailOverLap: false,
  nicknameOverLap: false,
};

//회원가입 action
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL_EMAILOVERLAP = "SIGN_UP_FAIL_EMAILOVERLAP";
export const SIGN_UP_FAIL_NICKNAMEOVERLAP = "SIGN_UP_FAIL_NICKNAMEOVERLAP";

export const ON_CHANGE_EMAILOVERLAP = "ON_CHANGE_EMAILOVERLAP";

export const LOG_IN_REQUEST = "LOGIN_IN_REQUEST ";

export const signupRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGN_UP_SUCCESS:
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAIL_EMAILOVERLAP:
        draft.signUpDone = false;
        draft.emailOverLap = true;
        break;

      case ON_CHANGE_EMAILOVERLAP:
        draft.emailOverLap = false;
        break;

      case SIGN_UP_FAIL_NICKNAMEOVERLAP:
        draft.nicknameOverLap = false;

      default:
        break;
    }
  });

export default reducer;
