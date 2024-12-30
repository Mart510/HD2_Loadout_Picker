import './App.css'
import { StratAndBoosterContainer } from './components/StratandBoosterContainer'
import { WeaponsSelector } from './components/WeaponsSelector'


function App() {

  const randomLoadOut = ():void => {
    location.reload()
  }

  return (
    <>
      <h1 className='text-2xl md:text-4xl font-zenDot'>Hell Divers 2 Loadout Rando-mat</h1>
      <br/>
      <header className='flex flex-col justify-center items-center'>
        <button onClick={randomLoadOut} className='mb-2 font-plexMono'>Randomize Loadout</button>
        <p className='text-xs md:text-sm font-plexMono'>Don't have the item? just click to re-roll it</p>
      </header>
      <main className='flex flex-col justify-center items-center w-full mb-12'>
        {/* Rand all button */}
        <WeaponsSelector/>
        {/* stratagem selector */}
        <StratAndBoosterContainer/>
      </main>
      <footer className='font-plexMono'>
        <p>All data from <a href="https://helldivers.wiki.gg/wiki/Main_Page" >Helldivers Wiki</a></p>
        <p>Created by <a href="https://github.com/Mart510">Martyn Billings</a></p>
      </footer>
    </>
  )
}

export default App
