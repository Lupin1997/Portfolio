import React from 'react';
import { Code, Database, Globe, Smartphone, Server, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "Authentication", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 }
      ]
    },
    {
      title: "Other Technologies",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "Web Performance", level: 80 },
        { name: "Testing", level: 70 },
        { name: "Deployment", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Agile Development",
              "Code Review",
              "Documentation",
              "Performance Optimization",
              "Security Best Practices",
              "Cross-browser Compatibility"
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-white text-gray-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;