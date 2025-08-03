const Contact = () => {
  return (
    <div className="pt-20 px-4 min-h-screen bg-[var(--bg)] text-[var(--text)] font-[var(--font)] flex items-center justify-center">
      <div className="max-w-xl w-full text-center">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        {/* Description */}
        <p className="text-lg mb-8">
          We'd love to hear from you. Whether it's feedback, a question, or just a hello — fill out the form and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert("Thank you for reaching out!")
          }}
          className="flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="w-full border border-gray-700 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Additional Info to Fill Space */}
        <div className="mt-12 text-sm text-gray-500">
          <p>📍 Office: Bhubaneswar, India</p>
          <p>📧 Email: swastiswarup1@gmail.com</p>
          <p>📞 Phone: +91-7978233870</p>
          <p className="mt-4 italic">We usually respond within 24 hours.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
