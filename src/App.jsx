
import './App.css'
import { Route, Routes } from 'react-router'
import { Home } from  './components/Home/home.jsx'
import { Navbar } from './components/Navbar/navbar.jsx'
import { Footer } from './components/Footer/footer.jsx'
import { Shop } from './components/Shop/shop.jsx'
import { Cart } from './components/Cart/cart.jsx'
import { NotFound } from './components/NotFound/notFound.jsx'
import { About } from './components/About/about.jsx'
import { CardExtended } from './components/CardExtended/cardExtended.jsx'
import { BackpackProvider } from './context/BackpackProvider.jsx' 
import { useState } from 'react'

function App() {

  const [currentOrder, setCurrentOrder] = useState([])
    console.log("App CURRENTORDER ", currentOrder)

  return (
    <BackpackProvider>
        <div className="container-global">
          <Navbar currentOrder={currentOrder}/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/cart" element={<Cart currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} />}></Route>
            <Route path="/card_extended" element={<CardExtended currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} />}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
          <Footer/> 
        </div>
      </BackpackProvider>
  )
}

export default App
