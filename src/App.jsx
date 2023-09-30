import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Search from './components/Search'
import Selects from './components/Selects'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero /> 
     <Destinations />
     <Search />
     <Selects />
     <Carousel />
     <Footer />
    </>
  )
}

export default App
