import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Modal } from "antd";
import LoginComponent from "../component/logincomponent";

const Login = () => {
  return (
    <div>
      <div class="flex items-center justify-center bg-[#ECE4D7] h-screen ">
        <div class="bg-[#FEF5E9] w-full ">
          <div class="flex justify-between items-center">
            <div class="w-[60px] h-[500px] bg-[#245A3A]"></div>
            <div class="max-w-full ">
              <img src="/LOGO.png"></img>
            </div>
            <div class="mr-[50px]">
              <LoginComponent></LoginComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
