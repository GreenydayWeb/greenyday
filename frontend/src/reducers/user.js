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
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";

export const signupRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        break;
      default:
        break;
    }
  });

export default reducer;
