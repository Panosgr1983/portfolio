import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
  };
}

export const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition group border border-gray-100">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-3">
        {service.details.map((detail, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <ChevronRight className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};