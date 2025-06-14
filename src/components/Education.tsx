'use client'

import Image from 'next/image'

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
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Education
        </h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="https://www.hr.kmitl.ac.th/wp-content/uploads/2020/08/cropped-kmitl-logoThai.png"
                alt="KMITL logo"
                fill
                className="rounded-lg object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Science in Applied Physics
              </h3>
              <p className="text-blue-400 mb-1">
                King Mongkut&apos;s Institute of Technology Ladkrabang
              </p>
              <p className="text-gray-400 text-sm mb-4">2019 - 2023</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>GPA: 3.25</li>
                <li>Specialized in electronics and instrumentation</li>
                <li>Completed senior project on IoT-based monitoring system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 