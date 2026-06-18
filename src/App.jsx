import GlobalReach from "./sections/GlobalReach"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

function App() {

  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <GlobalReach/>
      
    </div>
  )
}

export default App
