

const Footer = () => {
  return (
    <>
     <footer className="mt-10 py-6 bg-[var(--bg)] text-[var(--text)] border-t border-gray-300 text-center">
      <p className="text-xl">&copy; {new Date().getFullYear()} ThemeApp. All rights reserved.</p>
      <p className="text-l text-white">Made with ❤️</p>
    </footer>
    </>
  )
}

export default Footer