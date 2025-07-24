'use client'

import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface OwnerVideo {
  id: number;
  videoUrl: string;
  thumbnail: string;
  title: string;
  description?: string;
}

export default function VideoGallerySection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const ownerVideos: OwnerVideo[] = [
    { 
      id: 1, 
      videoUrl: "/1.mp4#t=5",
      thumbnail: "",
      title: "Leading the Vision",
      description: "Overseeing major infrastructure projects"
    },
    { 
      id: 2, 
      videoUrl: "/2.mp4",
      thumbnail: "",
      title: "On-Site Leadership",
      description: "Ensuring quality at every construction phase"
    },
    { 
      id: 3, 
      videoUrl: "/3.mp4",
      thumbnail: "",
      title: "Team Collaboration",
      description: "Building strong partnerships in construction"
    },
    { 
      id: 4, 
      videoUrl: "/4.mp4#t=5",
      thumbnail: "",
      title: "Innovation & Excellence",
      description: "Pioneering new construction methodologies"
    },
  ];

  const ownerInfo = {
    name: "Ramesh Choudhary",
    title: "Founder & CEO",
    company: "RC Power",
    experience: "10+ Years of Excellence",
    bio: "A visionary leader who has transformed the construction and power sector landscape with innovative approaches and unwavering commitment to quality. Under his leadership, RC Power has successfully completed numerous projects across India."
  };

  const togglePlay = (videoId: number) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-8">
            <div className="h-px w-20 bg-amber-700 mr-6"></div>
            <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
              Our Leadership
            </span>
            <div className="h-px w-20 bg-amber-700 ml-6"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-serif font-light text-slate-900 mb-6 tracking-tight">
            Meet Our Founder
          </h2>
          
          <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            {ownerInfo.bio}
          </p>
        </div>

        {/* Owner Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 border border-slate-200">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-2">
              {ownerInfo.name}
            </h3>
            <p className="text-amber-700 font-medium text-lg mb-2">
              {ownerInfo.title}
            </p>
            <p className="text-slate-600 text-sm uppercase tracking-wide mb-4">
              {ownerInfo.company} • {ownerInfo.experience}
            </p>
          </div>
        </div>
        
        {/* Video Gallery Grid */}
        <div className="relative">
          {/* Decorative frame */}
          <div className="absolute inset-0 border border-amber-700/20 rounded-lg -m-4"></div>
          
          <div className="relative z-10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ownerVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Video Container */}
                  <div className="relative aspect-[4/3] bg-white border border-slate-200 rounded-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      muted={playingVideo !== video.id}
                      loop
                      playsInline
                      ref={(el) => {
                        if (el) {
                          if (playingVideo === video.id) {
                            el.play();
                          } else {
                            el.pause();
                          }
                        }
                      }}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      {/* Play/Pause Button */}
                      <button
                        onClick={() => togglePlay(video.id)}
                        className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                      >
                        {playingVideo === video.id ? (
                          <Pause className="w-6 h-6 text-slate-900 ml-0" />
                        ) : (
                          <Play className="w-6 h-6 text-slate-900 ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-xl font-semibold mb-2">
                        {video.title}
                      </h4>
                      {video.description && (
                        <p className="text-slate-200 text-sm leading-relaxed">
                          {video.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Content */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium tracking-wide hover:bg-amber-700 transition-colors duration-300 group cursor-pointer">
            <span>Connect With Our Leader</span>
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