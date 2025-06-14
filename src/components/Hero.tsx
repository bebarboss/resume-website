export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">
        Navarit Rodsamrit
      </h1>
      <h2 className="text-2xl text-gray-300 mb-8">
        Manufacturing Supervisor
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Passionate about production management and engineering solutions.
        Specializing in manufacturing operations and technical problem-solving.
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
          className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-900/30 transition-colors"
        >
          View Projects
        </a>
      </div>
    </section>
  )
} 