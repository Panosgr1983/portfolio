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
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Υπηρεσίες</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Design & Ανάπτυξη</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Branding & Στρατηγική</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-shop Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Επικοινωνία</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="mailto:choliasmenos.panos@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  choliasmenos.panos@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Instagram className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="w-5 h-5 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Παναγιώτης Χολιασμένος. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};