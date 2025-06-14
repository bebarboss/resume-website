export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        John Doe
      </h1>
      <h2 className="text-2xl text-gray-600 mb-8">
        Full Stack Developer
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Passionate about creating elegant solutions to complex problems.
        Specializing in modern web technologies and user-centered design.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          View Projects
        </a>
      </div>
    </section>
  )
} 