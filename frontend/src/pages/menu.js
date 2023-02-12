import Header from "./component/header";
import Menucompoleft from "./component/menuleft";
import Menucomporight from "./component/menuright";
import Footer from "./component/footer";

function Menu() {
  return (
    <div class="bg-[#ECE4D7]">
      <Header />
      <div class="mt-7">
        <div class=" ">
          <div class="flex flex-col items-center">
            {menu.map((m) => {
              return (
                <div>
                  <Menucompoleft menu={m}></Menucompoleft>
                  <Menucomporight menu={m}></Menucomporight>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
