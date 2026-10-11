import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/home/Hero'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  

  return (
    <div className="min-h-screen flex-col bg-[#080D0C]">
      <Navbar />
      <main> 
        <Routes>
          <Route path='/' element={<Hero/>} />
        </Routes>
        <Footer/>
      </main>
    </div>
  )
}

export default App
