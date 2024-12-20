import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weapon from './components/weapon'

import { primaryWeapons } from './assets/weapons/primaryWeapons'
import { secondaryWeapons } from './assets/weapons/secondaryWeapons'
// import { grenades } from './assets/weapons/grenades'
// import { boosters } from './assets/booster'
// import { stratagems } from './assets/stratagems'

const randomPrimary = primaryWeapons[Math.floor(Math.random() * primaryWeapons.length)]
const randomSecondary = secondaryWeapons[Math.floor(Math.random() * secondaryWeapons.length)]
// const randomGrenade = grenades[Math.floor(Math.random() * grenades.length)]
// const randomBooster = boosters[Math.floor(Math.random() * boosters.length)]
// const randomStratagem = stratagems[Math.floor(Math.random() * stratagems.length)]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-pink-500">Vite + React + Dave</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Weapon {...randomPrimary}/>
      <Weapon {...randomSecondary}/>
    </>
  )
}

export default App
