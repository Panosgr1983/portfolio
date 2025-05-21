import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html'
})
export class TestimonialsSectionComponent {
  testimonials = [
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
}