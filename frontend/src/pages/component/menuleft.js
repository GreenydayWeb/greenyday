import { backUrl } from "../../config/config";

const MenuLeft = ({ menu }) => {
  return (
    <div class="w-[75rem] h-[15rem] bg-[#ECE4D7] mb-6">
      <div class=" h-64 flex items-center">
        <img class="w-auto " src="/greenline.png"></img>
        <img class="w-auto h-[20rem] " src={menu.itemimges[0].photo}></img>
        <div>
          <div class=" mb-2 text-[#245A3A] font-bold text-[28px]">
            {menu.name}
          </div>
          <div class=" mb-2  text-[20px]">{menu.description}</div>
          <div class=" mb-3  text-[17px]">{menu.ingredients.description}</div>

          <div class="flex  font-semibold text-[20px]">
            <div class="mr-4">
              <div>칼로리</div>
              <div>{menu.calorie}kcal</div>
            </div>
            <div class=" mr-4 flex flex-col items-center">
              <div>탄수화물</div>
              <div>{menu.nutritions.carbohydrate}</div>
            </div>
            <div class=" mr-4 flex flex-col items-center">
              <div>단백질</div>
              <div>{menu.nutritions.protein}</div>
            </div>
            <div class=" flex flex-col items-center">
              <div>지방</div>
              <div>{menu.nutritions.fat}</div>
            </div>
          </div>
        </div>
        {/* 정보 */}
      </div>
    </div>
  );
};

export default MenuLeft;
