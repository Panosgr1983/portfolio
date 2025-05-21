import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Μαρία Κ.",
      role: "CEO, Fashion Brand",
      content: "Η συνεργασία μας με τον Παναγιώτη ήταν εξαιρετική. Κατανόησε πλήρως τις ανάγκες μας και δημιούργησε ένα e-shop που ξεπέρασε τις προσδοκίες μας.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Γιώργος Π.",
      role: "Ιδιοκτήτης, Real Estate Agency",
      content: "Επαγγελματισμός και άριστη επικοινωνία. Το νέο μας website αύξησε σημαντικά τις online επαφές με υποψήφιους πελάτες.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Ελένη Μ.",
      role: "Marketing Director, Healthcare",
      content: "Η στρατηγική digital marketing που σχεδίασε ο Παναγιώτης για την κλινική μας είχε εντυπωσιακά αποτελέσματα. Συνεχίζουμε τη συνεργασία μας με απόλυτη εμπιστοσύνη.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Τι Λένε οι Πελάτες</h2>
          <p className="section-subtitle">
            Η επιτυχία των πελατών μου είναι και δική μου επιτυχία
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 bg-indigo-500 rotate-45"></div>
              </div>
              <div className="pt-6">
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};