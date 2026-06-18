import CommonQuestions from "./sections/CommonQuestions"
import FeeFreeForever from "./sections/FeeFreeForever"
import GlobalReach from "./sections/GlobalReach"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import PricingFooter from "./sections/PricingFooter"
import ReadyToWork from "./sections/ReadyToWork"
import ShowcaseTalents from "./sections/ShowcaseTalents"


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
      <PricingFooter/>
    </div>
  )
}

export default App
