interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://raw.githubusercontent.com/bebarboss/BOA/refs/heads/main/app_image/image/splash_screen.png',
    link: 'https://github.com/username/ecommerce'
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    image: '/projects/taskmanager.jpg',
    link: 'https://github.com/username/taskmanager'
  },
  {
    title: 'Business Intelligence Dashboard',
    description:
      'An interactive BI dashboard providing real-time sales analytics and performance metrics using Power BI.',
    technologies: ['Power BI', 'DAX', 'SQL', 'Excel'],
    image: '/images/pack-out.PNG',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYmJmMTYxMWEtZmJmMi00ZmEwLTljNGUtNmNhMjdiNDgyOWQ0IiwidCI6IjkxNzM3MjA0LTcxM2ItNGU5Mi04N2MyLTE5YmFjOWNkZjg3YiIsImMiOjEwfQ%3D%3D'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                [Project Image]
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 