import Header from "../components/header";

function About() {
  return (
    <div class="bg-[#ECE4D7]">
      <Header></Header>
      <div class="w-full h-[70px] lg:hidden bg-[#ECE4D7]"></div>
      <div class="">
        <img
          class=" opacity-75 relative w-full lg:h-[700px] h-[300px] "
          src="/about_img.jpg"
        ></img>
        <div class="flex flex-col place-items-center">
          <div class="absolute text-[30px] tracking-wide lg:top-[820px] mb-[40px] lg:text-[90px] text-[#245A3A] font-bold items-center ">
            ABOUT GRENNYDAY
          </div>
          <div>
            <p class="text-center   lg:text-[30px] leading-loose my-[100px] ">
              그리니데이는 당신의 하루에 건강함을 채워 줄 샐러드 전문
              브랜드입니다. <br /> 신선하고 깨끗한 식재료 사용을 원칙으로,
              건강한 음식을 제공하고 있습니다. <br /> 지속가능한 라이프스타일을
              위해, 가볍고 건강한 일상을 위해, <br /> 당신의 오늘을 건강하게
              채워줄, 든든한 하루 Have a GRENNYDAY
            </p>
          </div>
        </div>
      </div>
      {/* 그리니데이메뉴 */}
      <div class="flex flex-col place-items-center">
        <div class="text-[30px] lg:text-[90px] tracking-wide text-[#245A3A] font-bold items-center">
          GREENYDAY MENU
        </div>
      </div>
      {/* 메뉴 컴포넌트 시작*/}
      <div class=" grid grid-cols-8 bg-[#FEF5E9]">
        <div class="col-start-1 w-[60px] h-full bg-[#245A3A]"></div>
        <div class="col-start-2 col-span-4">
          <div class="flex items-center ">
            <img class="w-auto h-[20rem] " src="/menu1.png"></img>
            <div>
              <div class=" mb-2 text-[#245A3A] font-bold text-[28px]">
                닭가슴살 샐러드
              </div>
              <div class=" mb-2  text-[20px]">샐러드</div>
              <div class=" mb-3  text-[17px]">맛있는샐러드</div>

              <div class="flex  font-semibold text-[20px]">
                <div class="mr-4">
                  <div>칼로리</div>
                </div>
                <div class=" mr-4 flex flex-col items-center">
                  <div>탄수화물</div>
                </div>
                <div class=" mr-4 flex flex-col items-center">
                  <div>단백질</div>
                </div>
                <div class=" flex flex-col items-center">
                  <div>지방</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 메뉴 컴포넌트 끝*/}

      {/* 메뉴 컴포넌트 시작 */}
      <div class=" grid grid-cols-8 bg-[#FEF5E9]">
        <div class="col-start-1 w-[60px] h-full bg-[#245A3A]"></div>
        <div class="col-start-2 col-span-4">
          <div class="flex items-center ">
            <img class="w-auto h-[20rem] " src="/menu1.png"></img>
            <div>
              <div class=" mb-2 text-[#245A3A] font-bold text-[28px]">
                닭가슴살 샐러드
              </div>
              <div class=" mb-2  text-[20px]">샐러드</div>
              <div class=" mb-3  text-[17px]">맛있는샐러드</div>

              <div class="flex  font-semibold text-[20px]">
                <div class="mr-4">
                  <div>칼로리</div>
                </div>
                <div class=" mr-4 flex flex-col items-center">
                  <div>탄수화물</div>
                </div>
                <div class=" mr-4 flex flex-col items-center">
                  <div>단백질</div>
                </div>
                <div class=" flex flex-col items-center">
                  <div>지방</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 메뉴 컴포넌트 끝 */}
    </div>
  );
}

export default About;
