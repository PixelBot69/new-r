'use client'

import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  department?: string;
  image?: string;
}

export default function TeamGallerySection() {
  const teamMembers: TeamMember[] = [
    { 
      id: 1, 
      name: "Mr. Ramesh Choudhary",
      title: "Director",
      department: "Leadership"
    },
    { 
      id: 2, 
      name: "Ms. Monika Nayal",
      title: "HR - Head",
      department: "Human Resources"
    },
    { 
      id: 3, 
      name: "Mr. R.C Sharma",
      title: "Electrical - Project Head",
      department: "Electrical"
    },
    { 
      id: 4, 
      name: "Mr. Mayank Mathur",
      title: "Technical - Head, Automation",
      department: "Technical"
    },
    { 
      id: 5, 
      name: "Mr. Prahlad Singh",
      title: "Govt. E-Tending Department",
      department: "Government Relations"
    },
    { 
      id: 6, 
      name: "Mr. Rakesh Sharma",
      title: "Manager - Purchase",
      department: "Procurement"
    },
    { 
      id: 7, 
      name: "Mr. Shankar Lal Lamba",
      title: "Project Manager",
      department: "Project Management"
    },
    { 
      id: 8, 
      name: "Mr. Arvind Takhar",
      title: "Project Manager",
      department: "Project Management"
    },
    { 
      id: 9, 
      name: "Mr. Bhanu Pratap Singh",
      title: "Project Manager",
      department: "Project Management"
    },
    { 
      id: 10, 
      name: "Mr. Ramesh Tilor",
      title: "Account Manager",
      department: "Finance"
    },
  ];

  const companyInfo = {
    name: "RC Power Project Ltd.",
    subtitle: "Formerly Known As R.C. Enterprises",
    tagline: "Building Excellence Through Expert Leadership",
    description: "Our experienced team of professionals brings together decades of expertise in power projects, electrical systems, and infrastructure development. Each member contributes unique skills and knowledge to deliver exceptional results."
  };

  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-8">
            <div className="h-px w-20 bg-amber-700 mr-6"></div>
            <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
              Our Team
            </span>
            <div className="h-px w-20 bg-amber-700 ml-6"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-serif font-light text-slate-900 mb-6 tracking-tight">
            Meet Our Team
          </h2>
          
          <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            {companyInfo.description}
          </p>
        </div>

        {/* Company Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 border border-slate-200">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-2">
              {companyInfo.name}
            </h3>
            <p className="text-amber-700 font-medium text-lg mb-2">
              {companyInfo.subtitle}
            </p>
            <p className="text-slate-600 text-sm uppercase tracking-wide mb-4">
              {companyInfo.tagline}
            </p>
            
            {/* Contact Info */}
            <div className="flex justify-center items-center space-x-8 mt-6 text-sm text-slate-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-700" />
                <span>+91 9462163124</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-amber-700" />
                <span>rcpplimited733@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Group Photo */}
        <div className="relative mb-16">
          {/* Decorative frame */}
          <div className="absolute inset-0 border border-amber-700/20 rounded-lg -m-4"></div>
          
          <div className="relative z-10 p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
              {/* Group Photo Container */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                {/* Placeholder for team photo - replace with your actual image */}
        
                
                {/* Uncomment and use this when you have the actual image */}
                
                <img 
                  src="/11.jpeg" 
                  alt="RC Power Team" 
                  className="w-full h-full object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>

        {/* Team Members List */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-200 mb-16">
          <h3 className="text-2xl font-serif font-semibold text-slate-900 text-center mb-8">
            Our Team Members
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="text-center p-4 rounded-lg hover:bg-amber-50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.4s ease-out forwards'
                }}
              >
                <h4 className="font-semibold text-slate-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-amber-700 font-medium text-sm mb-1">
                  {member.title}
                </p>
                {member.department && (
                  <p className="text-slate-500 text-xs uppercase tracking-wide">
                    {member.department}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">10+</div>
              <div className="text-slate-600 text-sm uppercase tracking-wide">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">5+</div>
              <div className="text-slate-600 text-sm uppercase tracking-wide">Departments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">10+</div>
              <div className="text-slate-600 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-700 mb-2">100+</div>
              <div className="text-slate-600 text-sm uppercase tracking-wide">Projects Completed</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Content */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium tracking-wide hover:bg-amber-700 transition-colors duration-300 group cursor-pointer rounded">
            <span>Connect With Our Team</span>
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-4">
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/30 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}