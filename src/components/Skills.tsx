'use client'

interface Skill {
  name: string
  link: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Office Tools',
    skills: [
      { name: 'Microsoft Word', link: 'https://www.microsoft.com/en-us/microsoft-365/word' },
      { name: 'Microsoft Excel', link: 'https://www.microsoft.com/en-us/microsoft-365/excel' },
      { name: 'Microsoft PowerPoint', link: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint' },
      { name: 'Notion', link: 'https://www.notion.so/' }
    ]
  },
  {
    title: 'Programming Tools',
    skills: [
      { name: 'Python', link: 'https://www.python.org/' },
      { name: 'SQL', link: 'https://www.w3schools.com/sql/' },
      { name: 'Arduino IDE', link: 'https://www.arduino.cc/en/software' },
      { name: 'Git', link: 'https://git-scm.com/' },
      { name: 'GitHub', link: 'https://github.com/bebarboss' }
    ]
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'SolidWorks', link: 'https://www.solidworks.com/' },
      { name: 'Altium Designer', link: 'https://www.altium.com/altium-designer' },
      { name: 'Adobe Photoshop', link: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Adobe Premiere Pro', link: 'https://www.adobe.com/products/premiere.html' },
      { name: 'Adobe Illustrator', link: 'https://www.adobe.com/products/illustrator.html' },
      { name: 'Canva', link: 'https://www.canva.com/' }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <a
                  key={i}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800/50 hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
                >
                  {skill.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 