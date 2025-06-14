'use client'

interface EducationItem {
  degree: string
  school: {
    name: string
    link: string
  }
  period: string
  description: string[]
  logo: string
}

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering',
    school: {
      name: "King Mongkut's Institute of Technology Ladkrabang",
      link: 'https://www.kmitl.ac.th/'
    },
    period: '2008 - 2012',
    description: [
      'Major in Electronics Engineering',
      'GPA: 2.75',
      'Relevant coursework: Digital Electronics, Microcontrollers, Circuit Design'
    ],
    logo: '/images/logos/kmitl.png'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Education
      </h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
            <div className="flex items-start gap-4 mb-4">
              <a
                href={edu.school.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-lg bg-gray-800 p-2 border border-gray-700 flex items-center justify-center hover:border-blue-500 transition-colors"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.school.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://www.hr.kmitl.ac.th/wp-content/uploads/2020/08/cropped-kmitl-logoThai.png';
                  }}
                />
              </a>
              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <a
                  href={edu.school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:underline"
                >
                  {edu.school.name}
                </a>
                <p className="text-gray-400 text-sm">{edu.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {edu.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 