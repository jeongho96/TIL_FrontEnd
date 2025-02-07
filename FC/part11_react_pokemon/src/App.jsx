import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import PokeCard from './components/PokeCard'
import { AutoComplete } from './components/AutoComplete';

function App() {

  // 전체 포켓몬 데이터
  const [allPokemons, setAllPokemons] = useState([])

  // 보여줄 포켓몬 데이터
  const [displayedPokemons, setDisplayedPokemons] = useState([])

  const limitNum = 20;
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=0`;

  

  useEffect(() =>{
    fetchPokeData();
  }, [])

  // 전체 포켓몬 중 보여줄 포켓몬을 걸러주는 함수
  const filterDisplayedPokemonData = (allPokemonsData, displayedPokemons = []) => {
    // 0부터 차례대로 limitNum씩 증가하면서 보여줌.
    const limit = displayedPokemons.length + limitNum;

    // 전체 포켓몬 데이터를 함수가 다시 호출될 때마다 다음 오프셋의 값을 반환.
    const array = allPokemonsData.filter((_, index) => index + 1 <= limit);
    return array;
  }

  // async await은 비동기통신에서 답이 올때까지 기다리는 것
  const fetchPokeData = async () => {
    try{
        // 전체 데이터 받아오기
        const response = await axios.get(url);

        setAllPokemons(response.data.results);

        setDisplayedPokemons(filterDisplayedPokemonData(response.data.results));

    } catch(error){
        console.error(error);
    }
  }



  
  return (
   <article className='pt-6'>
    <header className='flex flex-col gap-2 w-full px-4 z-50'>
      <AutoComplete
        allPokemons = {allPokemons}
        setDisplayedPokemons= {setDisplayedPokemons}
      />
    </header>
    <section className='pt-6 flex flex-col justify-content items-center overflow-auto z-0'>
      <div className='flex flex-row flex-wrap gap-[16px] items-center justify-center px-2 max-w-4xl'>
        {displayedPokemons.length > 0 ?  (
          displayedPokemons.map(({url, name}, index) => (
            <PokeCard key={url} url={url} name={name}/>
          ))
        ) : (
          <h2 className='font-medium text-lg text-slate-900 mb-1'>
            포켓몬이 없습니다.
          </h2>
        )}

      </div>

    </section>
        <div className='text-center'>
          {(allPokemons.length > displayedPokemons.length) && (displayedPokemons !== 1) &&
          (
            <button 
            onClick={() => setDisplayedPokemons(filterDisplayedPokemonData(allPokemons, displayedPokemons))}
            className='bg-slate-800 px-6 py-2 my-4 txt-base rounded-lg font-bold text-white'>
            더 보기
            </button>
          )
          
          }
          

        </div>

   </article>
  )
}

export default App
