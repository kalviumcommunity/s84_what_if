import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import { Navbar } from './component/Navbar'
import Explore from './Pages/Explore'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/explore' element= {<Explore/>}/>
      </Routes>
    </>
  )
}

export default App
