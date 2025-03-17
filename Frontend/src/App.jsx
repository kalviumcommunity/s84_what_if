import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import {Navbar} from './component/Navbar'

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
    </>
  )
}

export default App
