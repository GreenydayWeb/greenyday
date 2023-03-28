# Greenyday
## 설치 파일
### front
> ```bash
> npm i next-redux-wrapper
> npm i redux-devtools-extension
> npm install
> npm i next
> npm add next react react-dom
> npm i axios
> npm add antd
> npm install redux react-redux redux-promise redux-thunk --save
> npm i react
> npm i immer
> npm i redux-saga
> npm install -D tailwindcss postcss autoprefixer
> npm install tw-elements
> npm install flowbite flowbite-react --save
> npm install @mantine/core @mantine/hooks @mantine/carousel
> npm install embla-carousel-react --save
> npm install --save-dev eslint
> npm install --save react-helmet
> npm install @tabler/icons-react
> npm i @headlessui/react
> npm i @heroicons/react/24/outline
> ```

### back

> ```bash
> python -m venv myvenv
> source myvenv/bin/activate
> cd greenyday
> cd backend
> pip install -r requirements.txt
> python manage.py makemigrations
> python manage.py migrate
> python manage.py createsuperuser
> python manage.py runserver
> ```
## ***Backend End-points*** 
> Resource modeling
> 
> 1️⃣ 회원 관련 API
> 
>   |  HTTP |  Path |  Method |  Permission |  목적 |
>   | --- | --- | --- | --- | --- |
>   |**POST** |/api/accounts/signup/|CREATE| AllowAny |사용자 회원가입|
>   |**POST** |/api/accounts/login/|NONE| AllowAny |사용자 로그인, access_token, refresh_token 생성 및 반환|
>   |**GET** |/api/accounts/login/kakao/|NONE| AllowAny |사용자 카카오 회원가입, 로그인, front에서 kakao code를 받아서 사용자의 계정 추출 후, 회원가입 혹은 로그인|
>   |**POST** |/api/accounts/logout/|NONE| IsAuthenticated |사용자 로그아웃, BlacklistedToken에 refresh_token 추가|
> 
> 
> 2️⃣ 루틴 관련 API
> 
>   |  HTTP |  Path |  Method |  Permission |  목적 |
>   | --- | --- | --- | --- | --- |
>   |**GET** |/api/items/|LIST| AllowAny |그리니데이 메뉴 관련 정보들 조회 |
>   |**GET** |/api/items/?category_id__name=샐러드|NONE| Allowany |쿼리 스트링에 맞는 해당 카테고리 메뉴 조회 |
>   |**GET** |/api/items/<int:pk>/|RETRIEVE| Allowany |특정 메뉴 디테일 조회|
>   |**GET** |/api/main/|NONE| Allowany |이벤트, 랜덤 메뉴, 체인점 조회| (체인점 모델 생성 예정)
