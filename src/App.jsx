import FeeFreeForever from "./sections/FeeFreeForever"
import GlobalReach from "./sections/GlobalReach"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import ShowcaseTalents from "./sections/ShowcaseTalents"

function App() {

  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <GlobalReach/>
      <FeeFreeForever/>
      <ShowcaseTalents/>
      
    </div>
  )
}

export default App
