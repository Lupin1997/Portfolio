import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Quantum Visionaries",
      description:
        "A comprehensive web application showcasing quantum computing concepts and visualizations. Built with modern web technologies to provide an interactive learning experience.",
      image:
        "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      liveUrl: "https://quantum-visionaries-002.netlify.app/",
      githubUrl:
        "https://github.com/Sharwan-Kumar-29/Quantum-Visionaries_002",
      featured: true,
    },
    {
      title: "Ludo Star Game",
      description:
        "An interactive multiplayer Ludo game built with modern web technologies. Features real-time gameplay, responsive design, and engaging user interface.",
      image:
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Socket.io", "CSS3"],
      liveUrl: "https://gaming-app-eosin.vercel.app/welcome",
      githubUrl: "https://github.com/Lupin1997/Ludo-Star",
      featured: true,
    },
    {
      title: "UNWIND - Relaxation App",
      description:
        "A wellness application designed to help users relax and unwind. Features meditation guides, calming sounds, and stress relief techniques.",
      image:
        "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      liveUrl: "https://sahilkoshriya.github.io/UNWIND/",
      githubUrl: "https://github.com/Lupin1997/UNWIND",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 ${
                project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''
              }`}
            >
              {/* Image Section */}
<div className={`relative overflow-hidden ${project.featured ? 'lg:order-1' : ''}`}>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
    >
      <ExternalLink size={20} />
    </a>
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
    >
      <Github size={20} />
    </a>
  </div>
</div>


              {/* Text Section */}
              <div className={`p-8 ${project.featured ? 'lg:order-2' : ''}`}>
                {project.featured && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Featured
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Lupin1997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
