
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from  './components/Home/home.jsx'
import { Navbar } from './components/Navbar/navbar.jsx'
import { Footer } from './components/Footer/footer.jsx'
import { Shop } from './components/Shop/shop.jsx'
import { Cart } from './components/Cart/cart.jsx'
import { NotFound } from './components/NotFound/notFound.jsx'


function App() {
  return (
    <div className="container-global">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/> 
    </div>
  )
}

export default App
