import './App.css'
import NavBar from './components/navbar/Navbar'
import ShowCase from './components/showcase/Showcase'
import BottomArea from './components/bottom/BottomArea'

function App() {
  return (
    <div className='big-wrapper'>
      <NavBar />
      <ShowCase />
      <BottomArea />
    </div>
  )
}

export default App
