'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/278327536_3205282659728816_5123969299999658403_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEDGEmbYqh2iwkZJSllyL1GSbZoXZvqTjhJtmhdm-pOOGzlHxmfVN6OkcTjlmTtIfG_tQrEYa4DBQwUlPhEJYhA&_nc_ohc=yPVFW3rQ22IQ7kNvwGybd5G&_nc_oc=Adma7JMzdgY7z3x9C8Rvv7lNuqfTJL8SEeagyZbQ5aYv_lPxOsQ6HGwA6C4T9qHim7sL1L75wsbgk6KZQC7kLh0j&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=fTw6R_rA5zEg7tvmUohD8w&oh=00_AfOWuvslSaQi2coa-lBiWCYClsyLfmSpMkOE0ilPs0Ft7A&oe=6853A4F4"
              alt="Navarit Rodsamrit"
              fill
              className="rounded-full object-cover border-4 border-gray-800"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://media.licdn.com/dms/image/v2/D5603AQE2EI4fb6BPlw/profile-displayphoto-shrink_800_800/B56ZQOREGDG8Ac-/0/1735406142816?e=1755129600&v=beta&t=exf-nqVxrItcktIX_QdiHg-rXtp8YNJ4OxMRnFSC0E8';
              }}
            />
          </div>
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