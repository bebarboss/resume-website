'use client'

import Image from 'next/image'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  logo: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Manufacturing Supervisor',
    company: 'UTAC Thai Limited',
    period: 'Aug 2023 - Present',
    description: [
      'Lead and manage production team to achieve daily targets',
      'Monitor and optimize manufacturing processes',
      'Ensure quality standards and safety protocols',
      'Coordinate with other departments for smooth operations'
    ],
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQFcF_2aB5Alqw/company-logo_200_200/company-logo_200_200/0/1630597993576/utac_logo?e=1755129600&v=beta&t=pYb479CmQtEKrCJFrRZAq1f41Lncpc6rPcrJIIILXxg'
  },
  {
    title: 'Service Engineer',
    company: 'Advance Siam Technology Co., Ltd.',
    period: 'Jun 2022 - Jul 2023',
    description: [
      'Provided technical support and maintenance for industrial equipment',
      'Performed installations and repairs',
      'Conducted training sessions for clients',
      'Managed service documentation and reports'
    ],
    logo: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/453211529_506557131755067_7793329410546229266_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFs56A_AhgZSjafa6F1FJQ1r2ICVhSnpBKvYgJWFKekEuVUHDDawye6dSDk9QD6no_JQJZCsXXxF4QtzfYCfwo9&_nc_ohc=PU4wis7b5q0Q7kNvwGSJLOD&_nc_oc=AdmiOjLof_QteB7RqfGiezuK-tpT83cVCf1oqrtneaK2NGyayzYhjLELxczqvNcVrscwgWjh0UO_Ie4OW9CDwmTC&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=EmCha6ObQRZbhs6MlhfVPA&oh=00_AfOBUnzhcIDobcN07vzWPvu6fgYOiHD0i492ZIKOK12VBQ&oe=6853C319'
  },
  {
    title: 'Engineering',
    company: 'Micropower Electronics Co., Ltd.',
    period: 'Aug 2021 - May 2022',
    description: [
      'Designed and developed electronic circuits',
      'Tested and validated product prototypes',
      'Created technical documentation',
      'Collaborated with cross-functional teams'
    ],
    logo: 'https://www.mpetech.co.th/wp-content/uploads/2023/02/MPE-PNG1000.png'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className="rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.title}
                  </h3>
                  <p className="text-blue-400 mb-1">{experience.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{experience.period}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 