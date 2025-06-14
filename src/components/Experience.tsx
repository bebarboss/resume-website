'use client'

interface ExperienceItem {
  title: string
  company: {
    name: string
    link: string
  }
  period: string
  description: string[]
  logo: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Manufacturing Supervisor',
    company: {
      name: 'Utac thai limit.',
      link: 'https://www.utacgroup.com/'
    },
    period: '2023 - Present',
    description: [
      'Oversee daily production operations',
      'Ensure product quality and compliance',
      'Resolve production issues promptly.',
      'Train and supervise production staff',
      'Implement process improvements',
      'Monitor machinery and coordinate maintenance',
      'Prepare and present production reports'
    ],
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQFcF_2aB5Alqw/company-logo_200_200/company-logo_200_200/0/1630597993576/utac_logo?e=1755129600&v=beta&t=pYb479CmQtEKrCJFrRZAq1f41Lncpc6rPcrJIIILXxg'
  },
  {
    title: 'Service Engineer',
    company: {
      name: 'Advance Siam Tech',
      link: 'https://www.advancesiam.com/'
    },
    period: '2012 - 2023',
    description: [
      'Provide customer support regarding machine information',
      'Conduct calibration of measuring instruments',
      'Measure machinery vibration in factories acrossious provinces'
    ],
    logo: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/453211529_506557131755067_7793329410546229266_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFs56A_AhgZSjafa6F1FJQ1r2ICVhSnpBKvYgJWFKekEuVUHDDawye6dSDk9QD6no_JQJZCsXXxF4QtzfYCfwo9&_nc_ohc=PU4wis7b5q0Q7kNvwGSJLOD&_nc_oc=AdmiOjLof_QteB7RqfGiezuK-tpT83cVCf1oqrtneaK2NGyayzYhjLELxczqvNcVrscwgWjh0UO_Ie4OW9CDwmTC&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=Drfs3k1szCRSaY3oW5ejyA&oh=00_AfMVyHVbmItQSU-lkCohT2CNVPs2RYdwMOa__QYdZVAD7w&oe=68538AD9'
  },
  {
    title: 'Engineering',
    company: {
      name: 'Micropower Electronics',
      link: 'https://www.mpetech.co.th/'
    },
    period: '2021 - 2022',
    description: [
      'Establish and assemble electrical circuits',
      'Inspect and repair electrical circuits',
      'Utilize Altium Designer for circuit design',
      'Use SolidWorks for mechanical and system design',
      'Develop C language code to control an ESP32 microcontroller'
    ],
    logo: 'https://www.mpetech.co.th/wp-content/uploads/2023/02/MPE-PNG1000.png'
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
            <div className="flex items-start gap-4 mb-4">
              <a
                href={exp.company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-lg bg-gray-800 p-2 border border-gray-700 flex items-center justify-center hover:border-blue-500 transition-colors"
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/logos/placeholder.png';
                  }}
                />
              </a>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <a
                  href={exp.company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:underline"
                >
                  {exp.company.name}
                </a>
                <p className="text-gray-400 text-sm">{exp.period}</p>
              </div>
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