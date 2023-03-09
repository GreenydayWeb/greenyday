import { backUrl } from "../../config/config";

const MenuRight = ({}) => {
  //   const imgurl = backUrl + menu.image;
  return (
    <div class="lg:w-[80rem] lg:h-[15rem]  bg-[#ECE4D7] mb-6 h-[40rem]">
      <div class=" h-64 flex lg:flex-row-reverse flex-col items-center ">
        <img class="w-auto hidden lg:block" src="/greenline.png"></img>
        <div class="lg:hidden border-[1px] border-[#245A3A] w-full"></div>
        <img class="w-auto h-[20rem] " src="/menu1.png"></img>
        <div>
          <div class="lg:grid lg:justify-items-end flex flex-col items-center ">
            <div class=" mb-2 text-[#245A3A] font-bold text-[28px] ">
              닭가슴살샐러드
            </div>
            <p class=" lg:text-right  mb-2  text-[20px] text-center">
              수비드 공법을 사용하여 촉촉하고 담백하며, 단백질 함량이 풍부한
              다이어트 필수 샐러드
            </p>
            <div class=" lg:text-right  mb-3  text-[17px] text-center">
              닭가슴살, 양상추, 청상추, 적근대,라디치오,
              스위트콘,올리브,양파,양파후레이크
            </div>

            <div class="flex  items-center font-semibold text-[20px]">
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
        </div>
        {/* 정보 */}
      </div>
    </div>
  );
};

export default MenuRight;
