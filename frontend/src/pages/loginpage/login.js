import React, { useState } from "react";
import { Typography } from "antd";
import { Button, Modal } from "antd";
import LoginComponent from "../component/logincomponent";

const Login = () => {
  return (
    <div class="bg-[#FEF5E9]">
      <div class="flex justify-between items-center pr-20">
        <div class="h-20">
          <img class="p-0" src="/greenline2.png"></img>
        </div>
        <div>
          <img src="/LOGO.png"></img>
        </div>
        <div>
          <LoginComponent></LoginComponent>
        </div>
      </div>
    </div>
  );
};
export default Login;
