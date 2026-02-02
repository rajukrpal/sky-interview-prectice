import { Routes,Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import HeroSection from "./pages/HeroSection"
import Organization from "./pages/Organization"
import SliderPage from "./pages/SliderPage"

function App() {
  return (
    <>
    {/* <div className="min-h-svh">
      <Navbar />
      <HeroSection />
    </div> */}
      <div className="min-h-svh">
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/slider" element={<SliderPage />} />
      </Routes>
    </div>
    </>
  )
}

export default App