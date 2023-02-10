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
          class="w-4/6  my-12 flex 
        justify-between place-items-center"
        >
          <a href="https://www.instagram.com/greenyday_anseo/">
            <img class="hidden md:block md:h-10" src="/instagram.png" />
          </a>

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

        <div class="  w-4/6 ">
          <ul class="relative md:flex md:justify-between  text-[25px] font-bold">
            <li class=" hover:z-50 mr-3 group dropdown ">
              <a class="mb-10 hover:underline  " href="/loginpage/login">
                About
              </a>
              <ul class=" w-[8rem] rounded-b bg-[#ECE4D7] absolute hidden group-hover:block hover:z-50 text-[20px]">
                <li class="hover:text-[#245A3A]  pl-2">
                  <a class="p" href="#">
                    회사 소개
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  pl-2 mb-2">
                  <a class="p" href="#">
                    메뉴 소개
                  </a>
                </li>
              </ul>
            </li>
            <li class="relative hover:z-50  mr-3 group box-border w-100 h-50 relative dropdown ">
              <a class=" mb-10  hover:underline  " href="/loginpage/login">
                Menu
              </a>
              <ul class="rounded-b w-[11rem] bg-[#ECE4D7] absolute hidden  group-hover:block text-[20px] mb-2  ">
                <li class="hover:text-[#245A3A] pl-2 ">
                  <a class="p" href="#">
                    Salad
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  pl-2">
                  <a class="p" href="#">
                    Sandwich&Wrap
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  pl-2">
                  <a class="p" href="#">
                    Greek yogyrt &Granola
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  pl-2">
                  <a class="p" href="#">
                    Side&Drink
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  pl-2 mb-2">
                  <a class="p" href="#">
                    Lunch box
                  </a>
                </li>
              </ul>
            </li>

            <li class="hover:z-50 w-200   relative mr-3 group box-border w-200 relative dropdown ">
              <a class=" mb-10 hover:underline  " href="/loginpage/login">
                Nutrition
              </a>
              <ul class="rounded-b w-[8rem] bg-[#ECE4D7] absolute hidden  group-hover:block text-[20px] mb-2 ">
                <li class="hover:text-[#245A3A]  pl-2">
                  <a class="p" href="#">
                    영양성분표
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  pl-2 mb-2">
                  <a class="p" href="#">
                    칼로리표
                  </a>
                </li>
              </ul>
            </li>

            <li class="hover:z-50  relative mr-3 group box-border w-50 h-50 relative dropdown ">
              <a class=" mb-10  hover:underline  " href="/loginpage/login">
                Store
              </a>
              <ul class=" rounded-b w-[8rem] bg-[#ECE4D7] absolute hidden  group-hover:block text-[20px] mb-2 ">
                <li class="w-60 hover:text-[#245A3A]  pl-2">
                  <a class="p" href="#">
                    매장찾기
                  </a>
                </li>
              </ul>
            </li>

            <li class="hover:z-50 relative mr-3 group box-border w-50 h-50 relative dropdown ">
              <a class=" mb-10  hover:underline  " href="/loginpage/login">
                Franchise
              </a>
              <ul class="rounded-b w-[8rem]  bg-[#ECE4D7] absolute hidden  group-hover:block text-[20px] mb-2 ">
                <li class="hover:text-[#245A3A]  pl-2">
                  <a class="p" href="#">
                    가맹안내
                  </a>
                </li>
                <li class="hover:text-[#245A3A] pl-2 mb-2">
                  <a class="p" href="#">
                    가맹상담신청
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
