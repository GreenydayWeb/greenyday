import React from "react";
import HeaderComponent from "./headercomponent";

function Header() {
  return (
    <div class="bg-[#ECE4D7]">
      <div class="flex flex-col items-center py-10">
        <img class="w-[300px] h-auto" src="/LOGO.png" />
      </div>
      <HeaderComponent></HeaderComponent>
    </div>
  );
}

export default Header;
