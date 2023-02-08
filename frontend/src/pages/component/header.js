import { Menu } from "antd";
import LOGIN from "../loginpage/login";
import SIGNUP from "../loginpage/signup";

import axios from "axios";
import { backUrl } from "../../config/config";
import { useEffect, useState } from "react";

function Header() {
  // const [imgurl, setimgurl] = useState("");
  // useEffect(() => {
  //   axios.get(backUrl + "/items/").then(
  //     (res) => {
  //       setimgurl(res.data.items[0].image[0]);
  //     },
  //     [imgurl]
  //   );
  // });

  return (
    <header class=" bg-[#ECE4D7]">
      <nav class="flex flex-col place-items-center">
        {/* 맨 위 헤더 */}
        <div
          class="w-4/6  my-7 flex 
        justify-between place-items-center"
        >
          <img class="hidden md:block md:h-10" src="/instagram.png" />

          <img class="w-140 h-12 pl-20" src="/LOGO.png" />

          {/* <img class="w-10 h-10" src={backUrl + imgurl} /> */}

          <ul class="hidden md:block md:flex font-[300] text-[23px]">
            <li class="mr-8">
              <a href="/loginpage/login">Login</a>
            </li>
            <li>
              <a href="/loginpage/signup">Sign up</a>
            </li>
          </ul>
        </div>
        {/* 두 번째 헤더 */}

        <div class="w-4/6 ">
          <ul class=" md:flex md:justify-between  lg:place-items-center text-[25px] font-bold ">
            <li class="mr-3 group relative dropdown">
              <a class="" href="/loginpage/login">
                About
              </a>
              <ul class="absolute hidden  group-hover:block">
                <li class="">
                  <a class="p" href="#">
                    One
                  </a>
                </li>
              </ul>
            </li>

            <li class="mr-3">
              <a href="/loginpage/login">Menu</a>
            </li>

            <li class="mr-3">
              <a href="/loginpage/login">Nutrition</a>
            </li>

            <li class="mr-3">
              <a href="/loginpage/login">Store</a>
            </li>

            <li class="">
              <a href="/loginpage/login">Franchise</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
