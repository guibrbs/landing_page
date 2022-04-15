import './App.css'
import NavBar from './components/navbar/Navbar'
import ShowCase from './components/showcase/Showcase'
import BottomArea from './components/bottom/BottomArea'
import Shape from './assets/images/shape.png'

function App() {
  return (
    <div className='big-wrapper'>
      <img src={Shape} alt="Shape" className='shape'/>
      <NavBar />
      <ShowCase />
      <BottomArea />
    </div>
  )
}

export default App
