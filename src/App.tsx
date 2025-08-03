import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header/>
         <div className="min-h-screen pt-20 bg-[var(--bg)] text-[var(--text)] font-[var(--font)]">
         <AppRoutes />
          <Footer />
         </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
