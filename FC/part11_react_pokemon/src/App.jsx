import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import PokeCard from './components/PokeCard'

function App() {

  const [pokemons, setPokemons] = useState([]);

  // limit는 말그대로 가져올 개수, offset은 페이징 시 묶음 단위
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0'

  useEffect(() =>{
    fetchPokeData();
  }, [])

  // async await은 비동기통신에서 답이 올때까지 기다리는 것
  const fetchPokeData = async () => {
    try{
        const response = await axios.get(url)
        setPokemons(response.data.results);
    } catch(error){
        console.error(error);
    }
  }

  return (
   <article className='pt-6'>
    <header className='flex flex-col gap-2 w-full px-4 z-50'>
      {/* Input Form 부분 */}
    </header>
    <section className='pt-6 flex flex-col justify-content items-center overflow-auto z-0'>
      <div className='flex flex-row flex-wrap gap-[16px] items-center justify-center px-2 max-w-4xl'>
        {pokemons.length > 0 ?  (
          pokemons.map(({url, name}, index) => (
            <PokeCard key={url} url={url} name={name}/>
          ))
        ) : (
          <h2 className='font-medium text-lg text-slate-900 mb-1'>
            포켓몬이 없습니다.
          </h2>
        )}

      </div>

    </section>
   </article>
  )
}

export default App
