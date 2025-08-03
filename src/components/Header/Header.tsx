import { useState } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Header() {
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--bg)] text-[var(--text)] shadow-md border-b border-gray-300 z-50">
            <div className="container mx-auto flex justify-between items-center h-full px-4">

                {/* Logo + Navigation */}
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        🎨 ThemeApp
                    </Link>

                    <nav className="hidden md:flex gap-6 text-base font-medium">
                        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
                        <Link to="/about" className="hover:text-blue-500 transition">About</Link>
                        <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
                    </nav>
                </div>

                {/* Theme Dropdown */}
                <div className="hidden md:block">
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value as any)}
                        className="bg-[var(--bg)] text-[var(--text)] border border-gray-300 text-sm rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="theme1">Light</option>
                        <option value="theme2">Dark</option>
                        <option value="theme3">Colorful</option>
                    </select>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden text-[var(--text)]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-[var(--bg)] text-[var(--text)] border-t border-gray-300 shadow-md">
                    <nav className="flex flex-col gap-4 p-4">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        <select
                            value={theme}
                            onChange={(e) => {
                                setTheme(e.target.value as any)
                                setIsMenuOpen(false) // close the mobile menu if it's open
                            }}
                            className="bg-[var(--bg)] text-[var(--text)] border border-gray-300 text-sm rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="theme1">Light</option>
                            <option value="theme2">Dark</option>
                            <option value="theme3">Colorful</option>
                        </select>

                    </nav>
                </div>
            )}
        </header>
    )
}
