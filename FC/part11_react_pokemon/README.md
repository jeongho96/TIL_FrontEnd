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


## 5. API를 통해 포켓몬 데이터 가져오기
`Pokeapi.co` 에 접속해서 포켓몬 관련 정보를 API의 형태로 불러와보자. <br>

<a link="Pokeapi.co">포켓몬 API</a>

이번에는 Axios 라는 HTTP 비동기 통신 라이브러리를 통해 사용해보려고 한다. 추후에 Axios, Fetch, Ajax의 차이점에 대해서 학습하면 좋을 듯 하다.

**사용방법**
- axios 모듈 설치 : `npm install axios --save`
- react useEffect를 통해 호출
    - useEffect는 컴포넌트 -> state 순으로 마운트되고 나서 호출된다.
    - `API => response => state update => component rerender => state`
```jxs


```

## 6. Image Lazy Loading
페이지 안에 있는 실제 이미지들을 바로 보여주는게 아니라, `실제로 화면에 보일 필요가 있을 떄 로딩을 할 수 있도록 하는 테크닉`을 의미한다.

Image Lazy Loading 구현 방법
- javascript 이벤트를 통한 구현
- Intersection Observer API 이용한 구현
- 브라우저 Native Lazy Loading 이용 => 로딩 속성 이용

> PokeCard.jsx와 LazyImage.jsx(components) 참조

## 7. 검색 기능 추가하기
App.jsx에 검색 기능을 추가해보자.

- 검색 기능은 검색 내용을 작성하면 자동으로 검색하고, 검색창이 빈 칸이라면 원래 화면처럼 포켓몬 리스트를 순서대로 보여주는 화면으로 전환한다.
- 검색창에 변화가 생기면 함수를 동작시키는 걸로 `onChange` 를 활용해 메소드를 적용시켜주자.

```jsx
const handleSearchInput = async (e) => {
    setSearchTerm(e.target.value);
    if(e.target.value.length > 0){
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`);
        const pokemonData = {
          url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}`,
          name: searchTerm
        }
        setPokemons([pokemonData])
      } catch(error){
        setPokemons([]);
        console.error(error);
      }
      // 만약 검색 내용이 없다면
    } else{
      fetchPokeData(true);
    }
  }

// ----------------
<form>

    <input
    type='text'
    value={searchTerm}
    onChange={handleSearchInput}
    />
    <button type='submit'>
    검색
    </button>

</form>

```


## 8. useDebounce Custom Hooks
위에서 입력창에 입력한 데이터를 기반으로 검색된 결과를 보여주지만, 모든 입력에 대해서 결과를 보여주게 되면 성능의 저하가 생길 수 있다. 

따라서 일종의 지연을 만들어 API 호출 회수를 줄일 수 있는데, 이를 위해 debounce function을 사용해 사용자가 입력을 지정한 시간동안 멈추게 되면 그 후에 이벤트 처리를 지연시킨다.

아래 코드를 확인해보자.

```js
import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState(value);

    // 만약 정해놓은 delay 시간 안에 value, 혹은 delay에 수정이 일어나면
    // return에 clearTimeout으로 초기화를 해주고, 다시 실행.
    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebounceValue(value)
            }, delay)
            
            return () => {
                clearTimeout(handler)
            }
        }, [value, delay]
    )


    return debounceValue
}


// input 태그에 이름 변경만 적용.

<input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='text-xs w-[20.5rem] h-6 px-2 py-1 bg-[hsl(214,13%,47%)] rounded-lg text-gray-300 text-center'
          
          />

// 검색에 대한 지연 호출(500ms)
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    handleSearchInput(debouncedSearchTerm)
  }, [debouncedSearchTerm])


```

- 검색한 단어(searchTerm)에 대해서 바로 가져오는게 아니라 500ms 이후 가져옴.
- 그걸 debouncedSearchTerm에 적용. debouncedSearchTerm이 변경될 떄마다 검색 함수 적용.



## 9. autocomplete 기능
검색 시 그와 관련된 이름들을 가져올 수 있게 구현하는 것을 의미함. 다만 검색 시에 그런 API를 요청하는 것은 성능 상에 문제도 있고 그런 기능은 찾기 쉽지 않다. 따라서 이 기능을 구현하려면 FE에서 모든 포켓몬의 데이터를 가지고 있어야 한다.