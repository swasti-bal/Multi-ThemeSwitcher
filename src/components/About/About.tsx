const About = () => {
  return (
    <div className="pt-20 px-6 min-h-screen flex flex-col items-center text-[var(--text)] font-[var(--font)] bg-[var(--bg)]">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">About ThemeApp</h1>
        <p className="text-lg mb-8">
          ThemeApp is a modern React-based application designed to demonstrate dynamic theme switching, responsive design,
          and external API integration — all built with simplicity and speed using Vite, TypeScript, and Tailwind CSS.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-8">
          Our mission is to build UI systems that are intuitive, accessible, and visually flexible. We believe in rapid development without compromising on quality and design.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Built With</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-md mb-10">
          <li>⚛️ React 18 + Vite</li>
          <li>💨 Tailwind CSS for utility-first styling</li>
          <li>🧠 Context API for global theme management</li>
          <li>🛠 TypeScript for type safety</li>
          <li>🌐 Fake Store API for product data</li>
        </ul>

        <p className="text-sm text-[var(--text)] font-[var(--font)] bg-[var(--bg)]">
          This project was created as a frontend developer assessment — carefully structured to showcase both design sense and coding principles.
        </p>
      </div>
    </div>
  )
}

export default About
