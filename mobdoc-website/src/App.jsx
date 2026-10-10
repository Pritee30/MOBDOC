import './App.css'
import Hero from './components/home/Hero'
import Navbar from './components/layout/Navbar'

function App() {
  

  return (
    <div className="min-h-screen bg-[#080D0C]">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
