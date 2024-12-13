## 7-2 webpack 
앞에서 설명했던 parcel과 같은 번들러이지만 좀 더 큰 프로젝트에 적합한 번들러이다.

- 설치 방법 : `npm i -D webpack webpack-cli webpack-dev-server@next`
- webpack : 필수 라이브러리
- webpack-cli : 스크립트를 사용하기 위해 필요한 패키지
- webpack-dev-server : 개발에 특화된 서버 생성
- webpack-dev-server와 webpack-cli는 버전 일치를 위해 설치시 @next 추가


### 기본설정
- parcel과 달리 개발서버 생성시 구성 파일을 제공해줘야 함(webpack.config.js)
- 진입점이 되는 파일(js)을 설정하는 값이 entry
- 이를 통해 build를 하게 되는 출력물의 경로와 값은 output으로 설정가능하다.
- `html-webpack-plugin`을 통해서 webpack이 main.js와 index.html을 통합해서 그 결과물을 dist에 생성
- plugins 옵션에 `new HtmlPlugin`을 통해 연결

### 정적 파일 연결
- 이미지 파일과 같은 경우 static 파일 내부에 작성 가능(정해진 건 아님)
- webpack.config.js에서 copy-webpack-plugin을 활용해 정적 파일을 빌드 시 복사해서 사용 가능.
- 경로를 plugin에서 정해주면 index.html에서 그 경로를 루트로 설정해서 가져올 수 있음.
- static/images/logo.png가 아니라 ./images/logo.png로 불러서 사용해야 오류가 나지 않음(빌드시 경로가 같아짐.)


### module
- css를 static 폴더에 저장해서 사용하는 방식도 있겠지만 권장하는 방식은 진입점인 main.js에 import 하는 것
- `import './css/main.css'` 와 같이 가져와서 사용
- 다만 webpack 자체는 css를 읽을 수 없기 때문에 `css-loader, style-loader` 패키지를 받아서 config.js에 적용해야 함.
- `css-loader` : js에서 css를 해석할 수 있게 만들어준다.
- `style-loader` : 읽어온 css를 html에 적용할 수 있게 만들어준다.
- config.js 에서 작성할 때 module 내에 use 순서가 중요함.


### scss 적용
위 모듈에 sass-loader와 sass 적용

### autoprefixer
- 브라우저에 따른 스타일의 autoprefixer를 적용시키기 위해 사용
- autoprefixer 적용을 위해서는 postcss, autoprefixer, postcss-loader가 필요하다.

### babel 적용
- 7-1의 설명 참조
- 구형 버전 호환성을 위해 설치
- config.js에 module에 객체 데이터 추가

### npx degit
- 터미널 창에서 명령어만으로 특정 github 계정의 repository를 다운로드할 수 있음.
- npx를 쓰면 degit을 별도로 설치하지 않아도 사용 가능.
- `npx degit 계정명/repository명 설치할_폴더이름`
- git clone은 버전관리가 되어 있는 프로젝트를 가져오는 거고, npx degit은 그런게 없는 새 프로젝트를 가져오는 기능.
- 