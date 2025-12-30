import Recommended from "./Recommended"
import HeroSection from "./HeroSection"
import ThirdSection from "./thirdSection/ThirdSection"
import ApplicationStatus from "./ApplicationStatus"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Recommended />
      <ThirdSection />
      <ApplicationStatus /> 
    </div>
  )
}

export default HomePage