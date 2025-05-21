'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Code, PenTool, BarChart, ChevronRight, Mail, Instagram, Linkedin, Phone, MapPin, FileText, User, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { ServiceCard } from '@/components/ServiceCard';
import { PortfolioItem } from '@/components/PortfolioItem';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const slides = [
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=2000&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      const sections = [
        { id: 'home', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'services', ref: servicesRef },
        { id: 'portfolio', ref: portfolioRef },
        { id: 'contact', ref: contactRef }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          const offsetHeight = section.ref.current.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: "Web Design & Ανάπτυξη",
      description: "Custom σχεδιασμός, responsive design, e-shop development και SEO best practices.",
      details: [
        "Custom Σχεδιασμός",
        "Responsive Design",
        "E-Shop Development",
        "SEO Best Practices"
      ]
    },
    {
      icon: <PenTool className="w-8 h-8 text-indigo-500" />,
      title: "Branding & Στρατηγική",
      description: "Ολοκληρωμένες λύσεις branding και στρατηγικής για την επιχείρησή σας.",
      details: [
        "Brand Identity",
        "Εταιρική Εικόνα & Guidelines",
        "Brand Positioning"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8 text-indigo-500" />,
      title: "Digital Marketing",
      description: "Στοχευμένες στρατηγικές digital marketing για αύξηση της online παρουσίας σας.",
      details: [
        "SEO & Content Strategy",
        "Google Ads & Meta Ads",
        "Social Media Management",
        "Email Marketing & CRM"
      ]
    }
  ];

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80",
      title: "E-shop Ειδών Ένδυσης",
      category: "E-commerce Development",
      description: "Δημιουργία e-shop για εταιρεία ειδών ένδυσης με στόχο την αύξηση των online πωλήσεων"
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Σχεδιασμός και ανάπτυξη site για real estate με προηγμένα φίλτρα αναζήτησης ακινήτων"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      title: "Ιατρικό Portal",
      category: "Healthcare",
      description: "Ολική αναβάθμιση ιστοσελίδας ιατρείου με online booking και πιο σύγχρονο brand identity"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      title: "Εφαρμογή Delivery",
      category: "Mobile App",
      description: "Σχεδιασμός και ανάπτυξη εφαρμογής για παραγγελίες φαγητού με σύστημα loyalty"
    }
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    closeMenu();
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Παναγιώτης Χολιασμένος</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection(heroRef)} 
                className={`${activeSection === 'home' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors`}
              >
                Αρχική
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)} 
                className={`${activeSection === 'about' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors`}
              >
                Σχετικά
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef)} 
                className={`${activeSection === 'services' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors`}
              >
                Υπηρεσίες
              </button>
              <button 
                onClick={() => scrollToSection(portfolioRef)} 
                className={`${activeSection === 'portfolio' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition-colors`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection(contactRef)} 
                className="btn-primary"
              >
                Επικοινωνία
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-3">
              <button 
                onClick={() => scrollToSection(heroRef)} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg"
              >
                Αρχική
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef)} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg"
              >
                Σχετικά
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef)} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg"
              >
                Υπηρεσίες
              </button>
              <button 
                onClick={() => scrollToSection(portfolioRef)} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection(contactRef)} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg"
              >
                Επικοινωνία
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Slider */}
      <section ref={heroRef} className="relative h-screen">
        {/* Background Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="md:max-w-2xl lg:max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Γεια σου! Είμαι ο <span className="text-indigo-400">Παναγιώτης Χολιασμένος</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Web Designer & Digital Marketer με πάθος για τη δημιουργία εντυπωσιακών ψηφιακών εμπειριών.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection(aboutRef)} className="btn-primary">
                  Περισσότερα για εμένα
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button onClick={() => scrollToSection(portfolioRef)} className="btn-secondary">
                  Δες το Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Σχετικά με Εμένα</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Είμαι επαγγελματίας Web Designer και Digital Marketer με εμπειρία πάνω από 10 χρόνια στον χώρο της δημιουργίας ιστοσελίδων και e-shops, του branding, αλλά και της online προώθησης επιχειρήσεων.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Η φιλοσοφία μου είναι απλή: δημιουργώ ψηφιακές εμπειρίες που συνδυάζουν την αισθητική με τη λειτουργικότητα, βοηθώντας τις επιχειρήσεις να αναπτυχθούν στο ψηφιακό περιβάλλον.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <User className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Επαγγελματική Εμπειρία</h3>
                    <p className="text-gray-600">Ξεκίνησα την καριέρα μου ως ελεύθερος επαγγελματίας το 2004</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Πολυετής Εξειδίκευση</h3>
                    <p className="text-gray-600">Εμπειρία σε διάφορους κλάδους και τεχνολογίες</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Digital Marketing Expert</h3>
                    <p className="text-gray-600">Πιστοποιημένος σε Google Ads, Meta Ads και SEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                alt="Professional workspace"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
                <div className="text-gray-600">Χρόνια Εμπειρίας</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Υπηρεσίες</h2>
            <p className="section-subtitle">
              Προσφέρω ολοκληρωμένες λύσεις για την ψηφιακή παρουσία της επιχείρησής σας
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Πρόσφατα Έργα</h2>
            <p className="section-subtitle">
              Μια επιλογή από τα πιο πρόσφατα και επιτυχημένα projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Περισσότερα Έργα <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Ας Συνεργαστούμε</h2>
            <p className="section-subtitle">
              Είμαι εδώ για να βοηθήσω την επιχείρησή σας να αναπτυχθεί ψηφιακά.
              Επικοινωνήστε μαζί μου για να συζητήσουμε το project σας.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">Στοιχεία Επικοινωνίας</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-100 rounded-full">
                      <Phone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Τηλέφωνο</h4>
                      <p className="text-gray-600">6977086945</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-100 rounded-full">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">choliasmenos.panos@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-100 rounded-full">
                      <MapPin className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Online Meetings</h4>
                      <p className="text-gray-600">Διαθέσιμος για online συναντήσεις</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-4">Ακολουθήστε με</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors">
                      <Instagram className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
                    </a>
                    <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}