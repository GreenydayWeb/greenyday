import { backUrl } from "../../config/config";

const MenuRight = ({}) => {
  //   const imgurl = backUrl + menu.image;
  return (
    <div class="w-[75rem] h-[15rem] bg-[#ECE4D7] mb-6">
      <div class=" h-64 flex flex-row-reverse items-center">
        <img class="w-auto " src="/greenline.png"></img>
        <img class="w-auto h-[20rem] " src="/menu1.png"></img>
        <div class="grid justify-items-end ">
          <div class=" mb-2 text-[#245A3A] font-bold text-[28px] ">
            닭가슴살샐러드
          </div>
          <div class=" mb-2  text-[20px]">
            수비드 공법을 사용하여 촉촉하고 담백하며, 단백질 함량이 풍부한
            다이어트 필수 샐러드
          </div>
          <div class=" mb-3  text-[17px]">
            닭가슴살, 양상추, 청상추, 적근대,라디치오,
            스위트콘,올리브,양파,양파후레이크
          </div>

          <div class="flex  font-semibold text-[20px]">
            <div class="mr-4">
              <div>칼로리</div>
              <div>190kcal</div>
            </div>
            <div class=" mr-4 flex flex-col items-center">
              <div>탄수화물</div>
              <div>12.3</div>
            </div>
            <div class=" mr-4 flex flex-col items-center">
              <div>단백질</div>
              <div>20.7</div>
            </div>
            <div class=" flex flex-col items-center">
              <div>지방</div>
              <div>8</div>
            </div>
          </div>
        </div>
        {/* 정보 */}
      </div>
    </div>
  );
};

export default MenuRight;
