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
  nickname: false,
};

//회원가입 action
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";



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

      case SIGN_UP_FAIL_NICKNAMEOVERLAP:
        draft.signUpDone = false;
        draft.nicknameOverLap = true;
        break;

      case ON_CHANGE_EMAILOVERLAP:
        draft.emailOverLap = false;
        break;

      case ON_CHANGE_NICKNAMEOVERLAP:
        draft.nicknameOverLap = false;
        break;

      default:
        break;
    }
  });

export default reducer;
