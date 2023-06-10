import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/nav-bar/NavBar'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
