# 11. 포켓몬 앱(react)

## 목차


---
## 1. 기본 디렉토리 설정

```bash
npm init vite
npm install axios react-router-dom
npm install -D autoprefixer postcss tailwind-scrollbar tailwindcss
```

- 다만 vite로 설치할 경우 기본 package가 설치되어 있지 않기 때문에 마지막으로 `npm install` 을 해줘야 문제 없이 동작한다.

## 2. Vite란?

- 빌드 속도나 새로운 코드를 적용했을 때의 반영 속도 같은 Feedback 속도의 엄청난 개선이 장점.
- 자바스크립트의 양이 기하급수적으로 많거나 하면 성능이나 개발 서버 가동이 굉장히 걸릴 수 있음.
- 기존의 번들러 기반 빌드 설정은 서비스 제공 전 전체 애플리케이션을 한 번 크롤링을 거쳐서 빌드해야만 함.
- Vite는 이런 기존 문제를 2가지 방면에서 해결하려고 했음.
    - `느린 서버 시작 속도` : 종속성과 소스 코드의 두 가지 범주로 나누어 개선.
    - esbuild를 통해 종속성을 사전 번들로 제공한다.
    - 브라우저에게 번들러 작업 일부를 인계한다.
    - `느린 서버 업데이트 속도` : HMR(Hot Module Replace)를 기본 ESM으로 수행하므로 앱의 크기와 상관없이 일관된 속도 유지
    - 기본적으로 TS를 지원하며, TS Transpiling을 지원하므로 훨씬 빠른 속도로 작업 가능.

> Create React App VS Vite
>> 설치시간, 파일크기, 빌드 파일 크기 모두 압도적으로 Vite가 빠름.

## 3. TailWindCSS
HTML 안에서 CSS 스타일을 만들 수 있게 해주는 CSS 프레임워크이다.
> CSS 프레임워크란 레이아웃, 컴포넌트 구성 등 소요되는 시간을 최소화하기 위해 여러 웹 프로젝트에 적용가능한 CSS 파일 모음을 의미한다. 즉 더 빠르게 스타일링 가능하다.

**장점**
- 부트스트랩과 유사하게 미리 세팅된 유틸리티 클래스를 활용하는 방식이므로 사용방법만 익숙해지면 쉽게 작성하고 만들어볼 수 있다.
- vscode에 `Tailwind CSS IntelliSense`를 제공하기 때문에 금방 적응할 수 있다.

### Tailwindcss 설정 및 세팅 방법
- npm을 통해 tailwindcss를 다운받고, 다음 명령어 입력
    - `npx tailwindcss init`
    - 위 명령어 입력시 `tailwind.config.cjs` 가 생성될 것이고 관련 설정 작성
    - 추가적으로 `postcss.config.cjs` 를 생성하고 관련 설정 작성.
    - 마지막으로 `index.css`에 아래 코드 추가.
    ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```


## 4. PostCSS & AutoFixer
PostCSS는  CSS 코드를 더 효율적으로 작성하고 관리할 수 있도록 도와주는 CSS 도구.

- 코드 가독성 향상 : 브라우저마다 다른 CSS 속성을 브라우저 환경에 맞게 수정해서 작성해줌.(`Autoprefixer`)
- 최신 CSS 변환 : 최신 방식으로 작성한 코드를 오래된 브라우저에서도 쓸 수 있게 만듬.
- 이름 변환 : 유니크한 이름으로 변환해 id나 클래스 이름이 겹치지 않도록 변환.
- css 파
