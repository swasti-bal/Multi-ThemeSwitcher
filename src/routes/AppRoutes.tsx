import { Routes, Route } from "react-router-dom"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
