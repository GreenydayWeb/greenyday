import React, { useState } from "react";

import SignupComponent from "./signupcomponent";
import Header from "../component/header";

const Signup = () => {
  return (
    <div class="bg-[#ECE4D7]">
      <Header></Header>
      <div class=" flex flex-col items-center ">
        <h1 class=" text-[50px] mt-[40px] mb-[20px]">Sign up</h1>
        <p class="text-[#797878] text-[20px] mb-[30px]">
          샐러드를 주문하려면 회원가입이 필요해요!
        </p>
        <div class="w-[700px] bg-[#CEC0AC] p-[50px] rounded-[60px]">
          <SignupComponent></SignupComponent>
        </div>
      </div>
    </div>
  );
};
export default Signup;
