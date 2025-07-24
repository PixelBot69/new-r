import React from 'react';
import Link from 'next/link';
import AboutSection from '@/components/FeaturedProjectsSection';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section with Team Photo */}
      <section className="relative overflow-hidden">
        <div className="w-full h-[60vh] md:h-[70vh] relative">
          <img 
            src="/group.jpeg" 
            alt="RC POWER Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
              <div className="inline-flex items-center mb-6">
                <div className="h-px w-16 bg-amber-700 mr-6"></div>
                <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                  Since 2012
                </span>
                <div className="h-px w-16 bg-amber-700 ml-6"></div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-light mb-6 tracking-tight">
                About Us
              </h1>
              
              <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-8"></div>
              
              <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                'A' Class EPC Electrical, Electronics, Civil & Automation Contractor
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-700"></div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Our Story
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              RC POWER PROJECT LIMITED
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <img 
                src="/about.png" 
                alt="RC POWER Office Interior" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-700 rounded-lg -z-10"></div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-light">
                <p>
                  <span className="text-amber-700 font-medium">RC Power Project Limited</span> is an 'A' Class EPC Electrical, Electronics, Civil & Automation Contractor providing comprehensive engineering, procurement, and construction services for electrical projects across various sectors. We are registered with various Government of India Electrical Bodies like JVVNL (Jaipur), JDVVNL (Jodhpur), AVVNL(Ajmer), NNJ, JDA, RHCL, M&HC, RSIRDCL, UIT (Kota, Bhilwara, Udaipur) UPCL (Dehradun – Uttarakhand), TUDA- Tripura.
                </p>
                
                <p>
                  <span className="text-amber-700 font-medium">Railways involved</span> in offering services in the field of, supplying, installation, testing and commissioning of Electrical & Civil Projects. Thirty-four years ago, a renowned multinational brand could not manage to set up a 132 kV transmission line in the state of Nagaland, due to technical issues and non-supporting conditions.
                </p>
              </div>
              
              {/* Quote */}
              <div className="border-l-4 border-amber-700 pl-8 py-6 bg-stone-50 rounded-r-lg">
                <blockquote className="text-2xl font-serif font-medium text-slate-900 mb-4">
                  "Every challenge is an opportunity"
                </blockquote>
                <cite className="text-amber-700 font-medium">
                  – Mr. Ramesh, Chairman of RC POWER
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Our Strengths
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              Core Capabilities
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experienced Team */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Experienced Team</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6"></div>
              <p className="text-slate-600 leading-relaxed font-light">
                Qualified engineers, technicians, and project managers with decades of expertise in electrical infrastructure
              </p>
            </div>

            {/* Comprehensive Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Comprehensive Services</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6"></div>
              <p className="text-slate-600 leading-relaxed font-light">
                Complete end-to-end solutions including design, installation, testing, commissioning, maintenance, and operation
              </p>
            </div>

            {/* Diverse Sectors */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Diverse Sectors</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6"></div>
              <p className="text-slate-600 leading-relaxed font-light">
                Serving oil & gas, power generation, renewable energy, infrastructure, and manufacturing industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner's Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Leadership Vision
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              Owner's Vision
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-700/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-700/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed font-light">
                  <p className="text-stone-200">
                    <span className="text-amber-400 font-medium">"R.C. POWER PROJECT LIMITED"</span> executive and employees are committed to attain the company goal, i.e., to jump into the position of front runner in the oil and gas, power generation, renewable energy, infrastructure industry and the leader of the EPC Electrical, Electronics, Civil & Automation Sector.
                  </p>
                  
                  <p className="text-stone-200">
                    To this end, we will endeavor to improve our organization and increase productivity through steady management. We will gear up into highly profitable project such as Automation.
                  </p>
                  
                  <div className="border-t border-amber-700/30 pt-6 mt-8">
                    <p className="text-xl font-medium text-amber-400 text-center">
                      "We vow to return your kindness through faster and better service."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Our Purpose
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              Mission & Vision
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-slate-200">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif font-medium text-slate-900 mb-6">Mission</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6"></div>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                To add value to our customers at lowest price by optimizing our costs and resources
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-slate-200">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif font-medium text-slate-900 mb-6">Vision</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6"></div>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                To double the combined group turnover by 2030
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Our Values
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              Our Commitments
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Environmental Policy */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Environmental Policy</h3>
                <div className="w-12 h-0.5 bg-green-600 mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Promote eco-friendly culture",
                  "Minimize environmental impact",
                  "Meet/exceed legal requirements",
                  "Develop safe, energy-efficient products",
                  "Minimize waste & prevent pollution"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Safety Policy */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Health & Safety Policy</h3>
                <div className="w-12 h-0.5 bg-blue-600 mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Dedicated Health & Safety Coordinator",
                  "First aid, health checks, PPE provided",
                  "Workman compensation, life & accidental coverage",
                  "Risk assessments & method statements",
                  "Regular training & equipment servicing"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 font-light leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Our Range
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              Our Services
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto mb-8"></div>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive electrical and civil engineering solutions across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Substation Installation",
                description: "Installation up to 33 KV substations",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Transmission Lines", 
                description: "Overhead HT/LT transmission lines installation",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              },
              {
                title: "Cable Laying",
                description: "HT & LT cable laying solutions", 
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              },
              {
                title: "Distribution Systems",
                description: "LT distribution systems implementation",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              },
              {
                title: "Communication Systems",
                description: "Fire protection systems and CCTV installations",
                icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"
              },
              {
                title: "Industrial Automation", 
                description: "Installation & Testing of automation panels",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-slate-200 rounded-lg p-8 text-center hover:shadow-lg hover:border-amber-700/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-serif font-medium text-slate-900 mb-3">{service.title}</h4>
                  <div className="w-8 h-px bg-amber-700 mx-auto mb-4 group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-slate-600 font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sector Work Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Specialized Work
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              Our Main Sector Of Work
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              "Overhead Transmission Lines for LT, 11 KV & 33 KV",
              "Supply & Erection / Construction of EHV / MV 33 KV, 11 KV and LT overhead lines",
              "Supply & Erection / Construction of EHV / MV 33 KV, 11 KV and LT underground cables",
              "Supply & Erection / Construction of EHV / MV 33 / 11 KV, 11 / 0.433 KV sub- stations complete with all equipment's",
              "Supply & Erection / Construction of 11 / 0.433 KV Packaged sub- stations",
              "Supply & Erection / Construction of 11KV Ring Main Units in underground cable network",
              "Supply & Erection works for Electric Traction for Indian Railways",
              "Operation & Maintenance work of 33KV & 11KV Sub – station"
            ].map((work, index) => (
              <div key={index} className="bg-stone-50 rounded-lg shadow-lg border border-slate-200 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-medium text-sm">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed">{work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-700"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                Get Started
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 tracking-tight">
              Ready to Work With Us?
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto mb-8"></div>
            
            <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Get in touch with our team to discuss how we can help with your electrical infrastructure project.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-slate-900 border-2 border-amber-700 text-white font-medium tracking-wide hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 group"
            >
              <span className="text-lg mr-4">Contact Us</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/30 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;