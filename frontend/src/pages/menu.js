import Header from "./component/header";
import Menucompoleft from "./component/menuleft";
import Menucomporight from "./component/menuright";
import Footer from "./component/footer";
import { backUrl } from "../config/config";
import { useState, useEffect } from "react";
import axios from "axios";
function Menu() {
  const [menu, setMenu] = useState([]);
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

  useEffect(() => {
    axios.get(backUrl + "/api/items/?category_id__name=샐러드").then((res) => {
      console.log(res.data);
      setMenu(res.data);
    });
  }, []);

  return (
    <div class="bg-[#ECE4D7]">
      <Header />
      <div class="mt-7">
        <div class=" ">
          <div class="flex flex-col items-center">
            {menu.map((m, index) => {
              console.log(index);
              if (index % 2 == 0) {
                return (
                  <div>
                    {" "}
                    <Menucompoleft menu={m}></Menucompoleft>
                  </div>
                );
              } else {
                return (
                  <div>
                    <Menucomporight menu={m}></Menucomporight>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
