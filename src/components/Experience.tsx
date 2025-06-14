interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: [
      'Led the development of a cloud-based SaaS platform serving 100,000+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2019 - 2021',
    description: [
      'Developed and maintained multiple client projects using React and Node.js',
      'Optimized database queries improving application performance by 40%',
      'Collaborated with UX designers to implement responsive designs'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'WebTech Solutions',
    period: '2018 - 2019',
    description: [
      'Built and maintained client websites using modern web technologies',
      'Participated in agile development processes and daily stand-ups',
      'Contributed to the development of internal tools and utilities'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Work Experience
      </h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-600">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600" />
            <div className="mb-2">
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 