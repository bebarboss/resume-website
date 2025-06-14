interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Manufacturing Supervisor',
    company: 'Utac thai limit.',
    period: '2023 - Present',
    description: [
      'Oversee daily production operations',
      'Ensure product quality and compliance',
      'Resolve production issues promptly.',
      'Train and supervise production staff',
      'Implement process improvements',
      'Monitor machinery and coordinate maintenance',
      'Prepare and present production reports'
    ]
  },
  {
    title: 'Service Engineer',
    company: 'Advance Siam Tech',
    period: '2012 - 2023',
    description: [
      'Provide customer support regarding machine information',
      'Conduct calibration of measuring instruments',
      'Measure machinery vibration in factories acrossious provinces'
    ]
  },
  {
    title: 'Engineering',
    company: 'Micropower Electronics',
    period: '2021 - 2022',
    description: [
      'Establish and assemble electrical circuits',
      'Inspect and repair electrical circuits',
      'Utilize Altium Designer for circuit design',
      'Use SolidWorks for mechanical and system design',
      'Develop C language code to control an ESP32 microcontroller'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Work Experience
      </h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
            <div className="mb-2">
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
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