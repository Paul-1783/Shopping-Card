
import './App.css'
import { Home } from  './components/Home/home.jsx'
import { Navbar } from './components/Navbar/navbar.jsx'
import { Footer } from './components/Footer/footer.jsx'

function App() {
  return (
    <div className="container-global">
      <Navbar/>
      <Home/>
      <Footer/> 
    </div>
  )
}

export default App
