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
    <header class="bg-[#ECE4D7]">
      <nav>
        {/* 맨 위 헤더 */}
        <div class="flex justify-between place-items-center mx-30">
          <img class="w-10 h-10" src="/instagram.png" />
          {/* <img class="w-10 h-10" src={backUrl + imgurl} /> */}

          <ul class="flex font-[300]">
            <li class="mr-3">
              <a href="/loginpage/login">Login</a>
            </li>
            <li>
              <a href="/loginpage/signup">Sign up</a>
            </li>
          </ul>
        </div>
        {/* 두 번째 헤더 */}
        <div>
          <ul class="flex justify-between  place-items-center">
            <li class="">
              <a href="/loginpage/login">About</a>
            </li>

            <li class="">
              <a href="/loginpage/login">Nutrition</a>
            </li>

            <li class="">
              <a href="/loginpage/login">Menu</a>
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
