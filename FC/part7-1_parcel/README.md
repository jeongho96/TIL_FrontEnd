# Part6. 번들러
번들러는 쉽게 설명해 여러 가지 파일을 하나로 묶는 도구로 생각하면 된다. 하나 혹은 몇개의 최적화된 파일로 묶어 브라우저가 빠르게 읽을 수 있는 형태로 만들어준다. 쉽게 설명하자면 브라우저와 개발자 사이의 효율적인 배달 서비스라고 할 수 있겠다. 대표적으로 `Webpack`, `Vite`, `Parcel` 등이 있으며 각각의 특징을 보자면 다음과 같다.

- `Parcel` : 구성 없는 단순한 자동 번들링, 소 / 중형 프로젝트에 적합
- `Webpack` : 매우 꼼꼼한 구성으로 중 / 대형 프로젝트에 적합
- `Vite` : 빠르고 간단한 최신 번들러

## 1. Parcel

간단한 개발을 할 때는 Parcel 번들러가 굉장히 유용하고 사용하고 쉽다. 
- parcel-plugin-static-files-copy 를 사용하면 정적 파일들을 build 시 dist에 같이 변환해서 저장가능하다.
- `npm i -D parcel-plugin-static-files-copy` 설치는 다음과 같이 가능하다.

아래와 같이 사용할 정적 파일의 경로를 `package.json`에 추가해서 활용하면 된다.
```
"staticFiles": {
        "staticPath": "public",
        "watcherGlob": "**"
    }

```


### autoprefixer, postcss
css 속성의 vendor-prefix를 접속하는 브라우저에 따라서 자동으로 붙여주는 기능.

- `npm i -D postcss autoprefixer` 2개를 설치하면 된다.
- `.postcssrc.js`를 루트 디렉토리에 생성해줘야만 한다.


```
<!-- 모든 브라우저 중 점유율 1% 이상, 최신 2개 버전 이상은 모두 지원하겠다는 뜻. -->
"browserslist": [
    "> 1%",
    "last 2 versions"
  ]

```


### babel
ECMAScript를 구형의 버전에서 호환이 되지 않는 문제를 고려하여, 컴파일해서 구형 버전에서도 실행이 정상적으로 되도록 변환해주는 라이브러리

- `npm i -D @babel/core @babel/preset-env`
- `npm i -D @babel/plugin-transform-runtime`
- `.babelrc.js` 작성 필요
- autoprefixer 처럼 browserslist 작성 필요.


## CLI
parcel bundler에서 package.json에서 사용하거나 터미널에서 사용할 명령어들 의미.
- <a href = "https://ko.parceljs.org/cli.html"> 공식문서 참고 </a>