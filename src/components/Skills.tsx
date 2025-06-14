interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx']
  },
  {
    title: 'Tools & Others',
    skills: ['VS Code', 'Figma', 'Jest', 'Webpack', 'REST APIs', 'GraphQL']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 