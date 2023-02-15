import Header from "./component/header";
import Menucompoleft from "./component/menuleft";
import Menucomporight from "./component/menuright";
import Footer from "./component/footer";
import { backUrl } from "../config/config";
import { useState, useEffect } from "react";

function Menu() {
  // useEffect(() => {
  //   axios.get(backUrl + "/api/main/").then((res) => {
  //     const events = res.data.events;
  //     const image = [];

  //     events.map((url) => {
  //       image.push(backUrl + url.image);
  //     });
  //     setimgurl(image);
  //     setmenu(res.data.items);
  //   });
  // }, []);

  return (
    <div class="bg-[#ECE4D7]">
      <Header />
      <div class="mt-7">
        <div class=" ">
          <div class="flex flex-col items-center">
            <Menucompoleft></Menucompoleft>
            <Menucomporight></Menucomporight>

            {/* {menu.map((m) => {
              return (
                <div>
                  <Menucompoleft menu={m}></Menucompoleft>
                  <Menucomporight menu={m}></Menucomporight>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
