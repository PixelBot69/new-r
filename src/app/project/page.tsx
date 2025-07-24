import React from 'react';

const KeyProjectsSection = () => {
  const projects = [
    {
      title: "SITC of Highmast lighting in Nagar Nigam Jaipur",
      client: "MUNICIPAL CORPORATION, JAIPUR",
      value: "₹ 1,17,82,802.00",
      category: "Municipal Infrastructure",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "33KV S/C Line (310 KMS.) Work related to PHED",
      client: "Ajmer Vidyut Vitran Nigam Ltd.",
      value: "₹ 38,97,85,730.12",
      category: "Transmission Lines",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    },
    {
      title: "33/11KV Sub Station & Associated HT & LT Line Infrastructure",
      client: "Ajmer Vidyut Vitran Nigam Ltd.",
      value: "₹ 34,95,00,000.00",
      category: "Substation Development",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      title: "Solar Power Based Arsenic / Fluoride Removal Unit",
      client: "Uttar Pradesh Jal Nigam",
      value: "₹ 31,26,03,480.00",
      category: "Water Treatment",
      icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "SITC of AG 2418 AG Connection in Hanumangarh Circle",
      client: "JdVVNL, Jodhpur",
      value: "₹ 55,35,19,148.00",
      category: "Agricultural Connections",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
      title: "SITC of AG 2000 AG Connection in Hanumangarh Circle",
      client: "AVVNL, Ajmer",
      value: "₹ 61,50,34,730.12",
      category: "Agricultural Connections",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
      title: "Improvement of Roads and Storm Water Drainage System in Tripura",
      client: "TUDA, Tripura",
      value: "₹ 70,81,85,730.12",
      category: "Civil Infrastructure",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Electrification work of ITBP Post and Vibrant Village of Uttarakhand",
      client: "UPCL, Uttarakhand",
      value: "₹ 68,61,13,332.00",
      category: "Rural Electrification",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ];

  const formatCurrency = (value:any) => {
    return value.replace(/₹\s*/, '₹ ').replace(/(\d+),(\d{2}),(\d{2}),(\d{3})\.(\d{2})/, '$1,$2,$3,$4.$5');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-8">
            <div className="h-px w-20 bg-amber-700 mr-6"></div>
            <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
              Our Excellence
            </span>
            <div className="h-px w-20 bg-amber-700 ml-6"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
            Key Completed Projects
          </h2>
          
          <div className="w-16 h-0.5 bg-amber-700 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            These projects highlight our capability in large-scale electrical and civil works across India
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-stone-50 border border-slate-200 rounded-lg p-8 hover:shadow-xl hover:border-amber-700/30 transition-all duration-300 h-full">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-300 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={project.icon} />
                    </svg>
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-3">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-medium text-slate-900 leading-tight group-hover:text-amber-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="w-12 h-px bg-amber-700 group-hover:w-16 transition-all duration-300"></div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-600">
                      <svg className="w-4 h-4 text-amber-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="font-light text-sm leading-relaxed">{project.client}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-amber-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <span className="text-2xl font-serif font-medium text-slate-900">
                        {formatCurrency(project.value)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Completion Badge */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xs text-slate-500 font-light">Project #{String(index + 1).padStart(2, '0')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Summary */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium text-slate-900 mb-2">8+</div>
                <div className="text-slate-600 font-light">Major Projects Completed</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium text-slate-900 mb-2">5+</div>
                <div className="text-slate-600 font-light">States Covered</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <div className="text-3xl font-serif font-medium text-slate-900 mb-2">₹400+ Cr</div>
                <div className="text-slate-600 font-light">Total Project Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProjectsSection;