import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/nav-bar/NavBar'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'
import { Products } from './components/Products/Products'
import { Product } from './components/Product/Product'
import { Cart } from './components/Cart/Cart'
import { Carts } from './components/Carts/Carts'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/products'} element={<Products />}></Route>
        <Route path={'/products/:id'} element={<Product />}></Route>
        <Route path={'/carts'} element={<Carts />}></Route>
        <Route path={'/carts/:id'} element={<Cart />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
