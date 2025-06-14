'use client'

import { smoothScroll } from '@/utils/smoothScroll'

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScroll(targetId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="text-xl font-bold text-white"
            >
              NVR
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-300 hover:text-white"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className="text-gray-300 hover:text-white"
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, 'education')}
              className="text-gray-300 hover:text-white"
            >
              Education
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className="text-gray-300 hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-gray-300 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-300 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 