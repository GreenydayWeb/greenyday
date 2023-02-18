import { backUrl } from "../../config/config";

const MenuTo = ({ menu }) => {
  const imgurl = backUrl + menu.image;

  return (
    <div class="flex flex-col place-items-center  max-w-[260px] h-[400px] rounded-[40px] shadow bg-[#CEC0AC] px-3">
      <img class=" display:block object-scale-down " src={imgurl}></img>
      <div class="display:block  text-[#FEF5E9] text-[25px] mb-[10px]">
        {menu.name}
      </div>

      <p class=" display:block  mx-3  text-center overflow-ellipsis overflow-hidden">
        {menu.description}
      </p>
    </div>
  );
};

export default MenuTo;
