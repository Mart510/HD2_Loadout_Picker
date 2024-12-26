import './App.css'
import { WeaponsSelector } from './components/WeaponsSelector'


function App() {

  return (
    <>
      <h1 className='text-2xl md:text-4xl xl:text-6xl'>Hell Divers 2 Loadout Rando-mat</h1>
      <br/>
      <div className='w-full flex flex-col justify-center items-center'>
        <button>Randomize Loadout</button>
        <p className='text-xs md:text-sm'>Don't have the item? just click to re-roll it</p>
      </div>
      <br/>
      <div className='flex flex-col justify-center items-center min-w-full'>
        {/* Rand all button */}
        <WeaponsSelector/>
        {/* stratagem selector */}
      </div>
      <footer>
        <p>All data from <a href="https://helldivers.wiki.gg/wiki/Main_Page">Helldivers Wiki</a></p>
        <p>Created by <a href="https://github.com/Mart510">Martyn Billings</a></p>
      </footer>
    </>
  )
}

export default App
