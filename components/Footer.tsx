import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Παναγιώτης Χολιασμένος</h3>
            <p className="text-gray-400 mb-4">Web Designer & Digital Marketer</p>
            <p className="text-gray-400">
              Δημιουργώ ελκυστικές ιστοσελίδες και αναπτύσσω καινοτόμες στρατηγικές branding για επαγγελματική online παρουσία.
            </p>
          </div>
  )
}