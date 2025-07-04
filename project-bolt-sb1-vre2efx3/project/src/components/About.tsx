import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Proficient in SQL and NoSQL database management"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "Modern web development with React, Node.js, and more"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Passionate Developer with a Vision
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a dedicated Full Stack Developer with a strong foundation in modern web technologies. 
              My journey in software development has been driven by curiosity and a passion for creating 
              solutions that make a difference.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With experience in React, Node.js, and various databases, I enjoy building scalable 
              applications that provide excellent user experiences. I'm always eager to learn new 
              technologies and take on challenging projects.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or working on personal projects that push the boundaries of what's possible.
            </p>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;