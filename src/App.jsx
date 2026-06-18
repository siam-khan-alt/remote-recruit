import FeeFreeForever from "./sections/FeeFreeForever"
import GlobalReach from "./sections/GlobalReach"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import ReadyToWork from "./sections/.ReadyToWork.jsx"
import ShowcaseTalents from "./sections/ShowcaseTalents"
import CommonQuestions from "./sections/CommonQuestions.jsx"

function App() {

  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <GlobalReach/>
      <FeeFreeForever/>
      <ShowcaseTalents/>
      <ReadyToWork/>
      <CommonQuestions/>
    </div>
  )
}

export default App
