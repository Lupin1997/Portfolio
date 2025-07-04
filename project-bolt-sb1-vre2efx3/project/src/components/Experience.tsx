import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Freelance",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Developed full-stack web applications using React, Node.js, and various databases",
        "Collaborated with clients to understand requirements and deliver custom solutions",
        "Implemented responsive designs and optimized application performance",
        "Worked with modern development tools and deployment platforms"
      ],
      technologies: ["React", "Node.js", "JavaScript", "HTML/CSS", "Git"]
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree",
      institution: "University/College",
      period: "2015 - 2019",
      description: "Focused on computer science fundamentals and software development principles"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Building className="text-blue-600" size={28} />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Building size={16} />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Calendar className="text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <Building size={16} />
                    {edu.institution}
                  </div>
                  
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;