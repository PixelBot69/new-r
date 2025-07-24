'use client';

import React from 'react';
import Image from 'next/image';

const ValuableClientsSection: React.FC = () => {
  const logoFiles = Array.from({ length: 12 }, (_, i) => `/logos/${String.fromCharCode(97 + i)}.png`);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Valuable Clients</h2>
          <p className="text-gray-600 mb-12">
            We are a client-centric organization, serving various Government departments with superior quality products and services.
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            {logoFiles.map((logoPath, index) => (
              <div key={index} className="flex items-center justify-center p-2">
                <Image
                  src={logoPath}
                  alt={`Client ${String.fromCharCode(65 + index)}`}
                  width={64}
                  height={64}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  unoptimized // Optional: helps bypass image loader issues
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" fill="#e5e7eb" rx="4"/>
                        <text x="32" y="38" text-anchor="middle" font-family="Arial" font-size="18" fill="#9ca3af">
                          ${String.fromCharCode(65 + index)}
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuableClientsSection;
