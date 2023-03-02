import LOGIN from "./logincomponent";
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
            <img
              class="hidden md:block md:h-10 hover:scale-105"
              src="/instagram.png"
            />
          </a>
          <a href="/home">
            <img class="w-140 h-12 pl-20 " src="/LOGO.png" />
          </a>

          {/* <img class="w-10 h-10" src={backUrl + imgurl} /> */}

          <ul class="hidden md:block md:flex font-[300] text-[23px]">
            <li class="mr-8 hover:scale-105">
              <a href="/loginpage/login">Login</a>
            </li>
            <li class="hover:scale-105">
              <a href="/loginpage/signup">Sign up</a>
            </li>
          </ul>
        </div>
        {/* 두 번째 헤더 */}

        {/* 네비게이션바 */}
        <div class="w-3/4  group relative">
          <div class=" absolute top-0 left-0  w-full h-[14rem] hidden group-hover:block bg-[#ECE4D7] z-30 "></div>
          <ul class=" md:flex md:justify-around  text-[25px] font-bold   ">
            <li class=" dropdown z-40  ">
              <a class="mb-10 hover:text-[#245A3A]" href="/loginpage/login">
                About
              </a>

              <ul class="  absolute hidden group-hover:block text-[17px] group-hover:z-50 mt-3  ">
                <li class="hover:text-[#245A3A] ">
                  <a class="p" href="#">
                    회사 소개
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  mt-1">
                  <a class="p" href="#">
                    메뉴 소개
                  </a>
                </li>
              </ul>
            </li>

            <li class=" dropdown z-40">
              <a class="  hover:text-[#245A3A]  " href="/menu">
                Menu
              </a>
              <ul class="  absolute hidden  group-hover:block group-hover:z-50 text-[17px]  mt-3  ">
                <li class="hover:text-[#245A3A]">
                  <a class="p" href="#">
                    Salad
                  </a>
                </li>
                <li class="hover:text-[#245A3A] mt-1">
                  <a class="p" href="#">
                    Sandwich&Wrap
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  mt-1">
                  <a class="p" href="#">
                    Greek yogyrt&Granola
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  mt-1">
                  <a class="p" href="#">
                    Side&Drink
                  </a>
                </li>
                <li class="hover:text-[#245A3A] mt-1">
                  <a class="p" href="#">
                    Lunch box
                  </a>
                </li>
              </ul>
            </li>

            <li class="   dropdown z-40">
              <a class=" hover:text-[#245A3A]  " href="/loginpage/login">
                Nutrition
              </a>
              <ul class=" absolute hidden  group-hover:block group-hover:z-50 text-[17px] mt-3 ">
                <li class="hover:text-[#245A3A]  ">
                  <a class="p" href="#">
                    영양성분표
                  </a>
                </li>
                <li class="hover:text-[#245A3A]  mt-1">
                  <a class="p" href="#">
                    칼로리표
                  </a>
                </li>
              </ul>
            </li>

            <li class="dropdown z-40">
              <a class="  hover:text-[#245A3A]" href="/loginpage/login">
                Store
              </a>
              <ul class=" absolute hidden  group-hover:block group-hover:z-50  text-[17px] mt-3">
                <li class=" hover:text-[#245A3A] ">
                  <a class="p" href="#">
                    매장찾기
                  </a>
                </li>
              </ul>
            </li>

            <li class="  dropdown z-40">
              <a class=" mb-10 hover:text-[#245A3A]  " href="/loginpage/login">
                Franchise
              </a>
              <ul class="absolute hidden  group-hover:block group-hover:z-50  text-[17px] mt-3">
                <li class="hover:text-[#245A3A]  ">
                  <a class="p" href="#">
                    가맹안내
                  </a>
                </li>
                <li class="hover:text-[#245A3A] mt-1 ">
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
