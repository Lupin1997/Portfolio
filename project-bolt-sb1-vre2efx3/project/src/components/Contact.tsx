import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "lupinsahu@gmail.com",
      link: "mailto:lupinsahu@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7828883548",
      link: "tel:7828883548"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Lupin1997"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lupin-sahu1997"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 hover:scale-110">
                  {info.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-gray-600 text-lg">{info.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 mb-6 text-xl">Follow Me</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-600 p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center w-16 h-16"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Work Together?
              </h4>
              <p className="text-gray-600 mb-6">
                I'm currently available for new projects and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:lupinsahu@gmail.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a
                  href="tel:7828883548"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;