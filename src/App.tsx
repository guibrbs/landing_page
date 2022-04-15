import './App.css'
import NavBar from './components/navbar/Navbar'
import ShowCase from './components/showcase/Showcase'
import BottomArea from './components/bottom/BottomArea'
import Shape from './assets/images/shape.png'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState(0)
  return (
    <div className= {theme ? "big-wrapper light" : "big-wrapper dark"}>
      <img src={Shape} alt="Shape" className='shape'/>
      <NavBar />
      <ShowCase />
      <BottomArea  setProps={setTheme}/>
    </div>
  )
}

export default App
