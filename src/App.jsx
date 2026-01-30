import { Routes,Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import HeroSection from "./pages/HeroSection"
import Organization from "./pages/Organization"

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
      </Routes>
    </div>
    </>
  )
}

export default App