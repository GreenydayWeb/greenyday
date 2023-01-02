import axios from "axios";
import { SIGNUP_USER } from "./types";

export function signupUser(dataTosubmit) {
  const request = axios.post("/accounts/signup/", body).then((response) => {
    response.data;
  });

  return {
    type: "SIGNUP_USER",
    payload: request,
  };
}
