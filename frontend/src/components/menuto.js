import { backUrl } from "../config/config";
import PropTypes from "prop-types";

const MenuTo = ({ menus }) => {
  const imgurl = backUrl + menus.image;

  return (
    <div class="flex flex-col place-items-center  max-w-[260px] h-[400px] rounded-[40px] shadow bg-[#CEC0AC] px-3">
      <img
        class=" display:block object-scale-down hover:scale-105 "
        src={imgurl}
      ></img>
      <div class="display:block  text-[#FEF5E9] text-[25px] mb-[10px]">
        {menus.name}
      </div>

      <p class=" display:block  mx-3  text-center overflow-ellipsis overflow-hidden">
        {menus.description}
      </p>
    </div>
  );
};

export default MenuTo;
