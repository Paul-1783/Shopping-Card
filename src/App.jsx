
import './App.css'
import { Slider } from  './components/Slider/Slider.jsx'
import { Intro } from './components/Intro/intro.jsx'
import { Navbar } from './components/Navbar/navbar.jsx'
import { Footer } from './components/Footer/footer.jsx'

function App() {
  return (
    <>
    <div className="container-global">
      <Navbar/>
      <Intro/>
      <Slider/>
      <Footer/> 
    </div>
    </>
  )
}

export default App
