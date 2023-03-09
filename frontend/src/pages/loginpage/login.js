import React, { useState } from "react";

import LoginComponent from "../component/logincomponent";
import Header from "../component/header";

const Login = () => {
  return (
    <div>
      <Header></Header>
      <div class="flex items-center justify-center bg-[#ECE4D7] h-screen ">
        <div class="bg-[#FEF5E9] w-full ">
          <div class="flex justify-between items-center">
            <div class="w-[60px] h-[600px] bg-[#245A3A]"></div>
            <div class=" ">
              <img src="/LOGO.png"></img>
            </div>
            <div class="mr-[150px]">
              <LoginComponent></LoginComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
