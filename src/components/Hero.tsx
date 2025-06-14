'use client'

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <img
            src="/profile.jpg"
            alt="Navarit Rodsamrit"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-gray-800"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://media.licdn.com/dms/image/v2/D5603AQE2EI4fb6BPlw/profile-displayphoto-shrink_800_800/B56ZQOREGDG8Ac-/0/1735406142816?e=1755129600&v=beta&t=exf-nqVxrItcktIX_QdiHg-rXtp8YNJ4OxMRnFSC0E8';
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Navarit Rodsamrit
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Manufacturing Supervisor | Electronics Engineer
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/navarit-rodsamrit-554121240/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
} 